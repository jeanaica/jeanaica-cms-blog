import express, {Request, Response} from "express";

import {db} from "../../util/admin";
import Posts from "../../model/posts";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    db.collection("posts")
        .orderBy("created_at", "desc")
        .get()
        .then((data: FirebaseFirestore.QuerySnapshot) => {
            const posts: Array<Posts> = [];
            data.forEach((doc: FirebaseFirestore.DocumentData) => {
                posts.push({
                    id: doc.id,
                    title: doc.data().title,
                    author: doc.data().author,
                    body: doc.data().body,
                    created_at: doc.data().created_at._seconds,
                    updated_at: doc.data().updated_at._seconds,
                    banner: doc.data().banner,
                    tags: doc.data().tags,
                });
            });
            return res.json(posts);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code});
        });
});

router.get("/:id", async (req: Request, res: Response) => {
    const snapshot = await db.collection("posts").doc(req.params.id).get();

    const postId = snapshot.id;
    const postData = snapshot.data();

    res.status(200).send({
        ...postData,
        id: postId,
        created_at: postData?.created_at?._seconds,
        updated_at: postData?.updated_at?._seconds,
    });
});

export default router;

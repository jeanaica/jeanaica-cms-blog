import {Request, Response} from "express";
import Posts from "../model/posts";

import {db} from "../util/admin";

const getAllPosts = (req: Request, res: Response) =>
    db
        .collection("posts")
        .orderBy("created_at", "desc")
        .get()
        .then((data: FirebaseFirestore.QuerySnapshot) => {
            const posts: Array<Posts> = [];
            data.forEach((doc: FirebaseFirestore.DocumentData) => {
                posts.push({
                    title: doc.id,
                    author: doc.author,
                    body: doc.body,
                    created_at: doc.data().created_at,
                    updated_at: doc.data().updated_at,
                    banner: doc.banner,
                    tags: doc.tags,
                });
            });
            return res.json(posts);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code});
        });

export {getAllPosts};

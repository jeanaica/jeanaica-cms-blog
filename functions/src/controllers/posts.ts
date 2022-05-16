import express from "express";
import * as functions from "firebase-functions";

import {getAllPosts} from "../api/posts";

const app = express();

app.get("/posts", getAllPosts);

const posts = functions.region("asia-east1").https.onRequest(app);

export default posts;

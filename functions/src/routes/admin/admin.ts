import * as functions from "firebase-functions";
import express from "express";
import cors from "cors";

import posts from "./posts";

const app = express();

app.use(cors({origin: true}));

app.use("/posts", posts);

const admin = functions.region("asia-east1").https.onRequest(app);

export {admin};

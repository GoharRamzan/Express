import express from 'express';
let router = express.Router()

import authRouter from "./routes/auth.mjs"
import commentRouter from "./routes/comment.mjs"
import postRouter from "./routes/post.mjs"
import feedRouter from "./routes/feed.mjs"


router.use(authRouter)


router.use((req, res, next) => {
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})


router.use("/api/v2", commentRouter)
router.use("/api/v2", postRouter)
router.use("/api/v2", feedRouter)


router.post("/weather", (req, res, next) => {

    console.log("req.body: ", req.body);

    res.send({
        apiVersion: "v2",
        temp: 32,
    });
})

export default router
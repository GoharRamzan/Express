import express from 'express';
let router = express.Router()
import path from "path"
const __dirname = path.resolve()
import authRouter from "./routes/auth.mjs"
import commentRouter from "./routes/comment.mjs"
import postRouter from "./routes/post.mjs"
import feedRouter from "./routes/feed.mjs"


router.use(authRouter)

let token = "vaid";
router.use((req, res, next) => {
    if (token === "valid") {
        next();
    } else {
        // res.send(express.static(path.join(__dirname,"public")))
        
        res.redirect("/login")
    }
})


router.use(commentRouter)
router.use(postRouter)
router.use(feedRouter)


router.post("/weather", (req, res, next) => {

    console.log("req.body: ", req.body);

    res.send({
        apiVersion: "v1",
        temp: 32,
    });
})

export default router
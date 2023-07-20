
import express from 'express';
let router = express.Router()

// GET     /api/v1/post/:userId/:postId
router.get("post/:userId/:postId",(req, res , next)=>{
    res.send("post createad")
})

// GET     /api/v1/post/:userId/:postId
router.get("/post/:userId/:postId",(req, res , next)=>{
    res.send("post createad")
})

// GET     /api/v1/post
router.get("/post",(req, res , next)=>{
    res.send("post createad")
})

// get     /api/v1/post/:userId/:postId
router.put("/post/:userId/:postId",(req, res , next)=>{
    res.send("post createad")
})

router.delete('/post/:userId/:postId',(req, res , ne)=>{
    res.send("post deleted")

})

export default router 
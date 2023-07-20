import express from 'express'
let router = express.Router();

// api/v1/comment created
router.get("/comment/:postid/:commentid:", (req , res , next)=>{

    res.send("comment created")
})

router.get("/comment/:postid", (req , res ,next)=>{
    res.send("comment created")

})

router.put("/comment/:postid/:commentid",(req ,res,next)=>{
    res.send("put comment created")

})

router.delete("/comment/:postid/:commentid",(req,res,next)=>{
    res.send("comment deleted")

})

export default router
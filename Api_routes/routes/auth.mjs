import express  from "express"
let router = express.Router();

router.post("/login",(req , res, next)=>{
    console.log("this is login req", new Date())
    res.send("this is login req v1"+ new Date())
})
router.post("/signin",(req , res, next)=>{
    console.log("this is signin req", new Date())
    res.send("this is signin req v1"+ new Date())
})

export default router
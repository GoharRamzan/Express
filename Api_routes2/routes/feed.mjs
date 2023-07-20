import express from 'express';
let router = express.Router()

// get     /api/feed/:userId

router.get("/feed/:userId",(req,res,nex)=>{
    res.send("psit cerahta")
})

export default router

import express from 'express';
let router = express.Router()




// GET     /api/v2/post/:userId/:postId
router.get('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// GET     /api/v2/posts/:userId
router.get('/posts/:userId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// POST    /api/v2/post
router.post('/post', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// PUT     /api/v2/post/:userId/:postId
router.put('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// DELETE  /api/v2/post/:userId/:postId
router.delete('/post/:userId/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})

export default router
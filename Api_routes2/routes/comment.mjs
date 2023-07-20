import express from 'express';
let router = express.Router()

// GET     /api/v2/comment/:postId/:commentId
router.get('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// GET     /api/v2/comments/:postId
router.get('/comments/:postId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// PUT     /api/2/comment/:postId/:commentId
router.put('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})
// DELETE  /api/v2/comment/:postId/:commentId
router.delete('/comment/:postId/:commentId', (req, res, next) => {
    console.log('this is signup!', new Date());
    res.send('post created');
})

export default router
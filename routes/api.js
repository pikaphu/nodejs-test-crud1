const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({message: 'API'})
})

const PostsComponents = require ('../services/posts')
let posts = new PostsComponents()

// 1. Get all posts data
router.get('/posts', (req, res) => {
    res.sendAPI(posts.selectAll())
})

// 2. Get a posts data
router.get('/posts/:id', (req, res) => {
    res.sendAPI(posts.selectOne(req.params.id))
})

// 3. Create a posts data
router.post('/posts', (req, res) => {
    console.log('posts data:', req.params, req.body);
    res.sendAPI(posts.create(req.body))
})

// 4. Edit
router.put('/posts/:id', (req, res) => {
    console.log('posts data:', req.params, req.body);
    res.sendAPI(posts.update(req.params.id, req.body))
})

// 5. Delete
router.delete('/posts/:id', (req, res) => {
    console.log('delete:', req.params);
    res.sendAPI(posts.delete(req.params.id))
})

module.exports = router;
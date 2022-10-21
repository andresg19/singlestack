const { Router } = require('express');

const router = Router();

const { getUsers, postUsers, getUsersById, deleteOneUser, updateUser} = require('../controllers/Ucontrollers/index.controll');
const { createPost, getPosts } = require('../controllers/Pcontrollers/index.controll');

router.get('/users', getUsers);
router.get('/users/:id', getUsersById);
router.post('/users', postUsers);
router.delete('/users/:id', deleteOneUser);
router.put('/users/:id', updateUser);


router.post('/createPost', createPost);
router.get('/posts', getPosts)

module.exports = router;
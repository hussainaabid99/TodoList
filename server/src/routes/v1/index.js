import express from 'express';

import { createTodo, getTodo, getAllTodo, removeTodo, updateTodo } from '../../controllers/todo-controller.js';
import { createUser, getUser, removeUser, updateUser } from '../../controllers/user-controller.js';

const router = express.Router();

//Todo
router.post('/todo', createTodo);
router.get('/todo', getAllTodo);
router.get('/todo/:id', getTodo);
router.delete('/todo/:id', removeTodo);
router.patch('/todo/:id', updateTodo);

//User
router.post('/user', createUser);
router.get('/user/:id', getUser);
router.delete('/user/:id', removeUser);
router.patch('/user/:id', updateUser);

export default router;
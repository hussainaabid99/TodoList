import express from 'express';

import { createTodo, getTodo, getAllTodo, removeTodo, updateTodo } from '../../controllers/todo-controller.js';
import { createUser, getUserWithTodos, removeUser, updateUser, getUserByEmail } from '../../controllers/user-controller.js';
import validateUserEmail from '../../middlewares/validate.js';

const router = express.Router();

//Todo
router.post('/todo', createTodo);
router.get('/todo', getAllTodo);
router.get('/todo/:id', getTodo);
router.delete('/todo/:id', removeTodo);
router.patch('/todo/:id', updateTodo);

//User
router.post('/signup', createUser);
router.get('/todos/:userId', getUserWithTodos);
router.post('/signin', validateUserEmail, getUserByEmail);
router.delete('/user/:id', removeUser);
router.patch('/user/:id', updateUser);

export default router;
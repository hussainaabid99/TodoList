import express from 'express';

import { createTodo, getTodo, getAllTodo, removeTodo, updateTodo } from '../../controllers/todo-controller.js';
import { signUp, getUserWithTodos, removeUser, updateUser, signIn } from '../../controllers/user-controller.js';
import validateUserAuth from '../../middlewares/validate.js';
import isAuthenticated from '../../middlewares/isAuthenticated.js';

const router = express.Router();

//Todo
// router.post('/todo', createTodo);
// router.get('/todo', getAllTodo);
// router.get('/todo/:id', getTodo);
// router.delete('/todo/:id', removeTodo);
// router.patch('/todo/:id', updateTodo);

//User
router.post('/signup', validateUserAuth, signUp);
router.get('/todos/:userId', isAuthenticated, getUserWithTodos);
router.post('/signin', validateUserAuth, signIn);
router.delete('/user/:id', isAuthenticated, removeUser);
router.patch('/user/:id', isAuthenticated, updateUser);

export default router;
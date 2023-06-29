import express from 'express';
import * as controller from '../Controllers/UsersContr'
import { postMiddleware, putMiddleware } from '../Common/UsersJoi'

export const userRouter = express.Router();

// список користувачів
userRouter.get('/', controller.get);
// отримання даних користувача за його id
userRouter.get('/:userId', controller.get);
// створення користувача
userRouter.post('/', postMiddleware, controller.post);
// оновлення даних користувача за його id
userRouter.put('/:userId', putMiddleware, controller.put);
// видалення користувача за його id
userRouter.delete('/:userId', controller.remove);
import express from 'express';
import * as controller from '../Controllers/PostsContr'
import { postMiddleware, putMiddleware } from '../Common/PostsJoi'

export const postRouter = express.Router();

// список записів
postRouter.get('/', controller.get);
// отримання даних про запис за його id
postRouter.get('/:postId', controller.get);
// створення запису
postRouter.post('/', postMiddleware, controller.post);
// оновлення даних запис за його id
postRouter.put('/:postId', putMiddleware, controller.put);
// видалення запису за його id
postRouter.delete('/:postId', controller.remove);

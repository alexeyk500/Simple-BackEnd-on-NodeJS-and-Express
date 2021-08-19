import Router from "express";
import PostController from "./PostController.js";

const postRouter = new Router();

postRouter.get('/posts', PostController.getAll);
postRouter.get('/posts/:id', PostController.getOne);
postRouter.post('/posts', PostController.create);
postRouter.put('/posts', PostController.update);
postRouter.delete('/posts/:id', PostController.delete);

export default postRouter
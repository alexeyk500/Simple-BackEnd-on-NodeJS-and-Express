import Router from "express";
import Post from "./Post.js";
import PostController from "./PostController.js";

const postsRouter = new Router();

postsRouter.get('/posts', PostController.getAll);
postsRouter.get('/posts/:id', PostController.getOne);
postsRouter.post('/posts', PostController.create);
postsRouter.put('/posts', PostController.update);
postsRouter.delete('/posts/:id', PostController.delete);

export default postsRouter
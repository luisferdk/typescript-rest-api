import { Router } from 'express';
import { getAll, createPost, getPost, deletePost, updatePost } from '../controllers/posts';
const router = Router();

router
  .route('/posts')
  .get(getAll)
  .post(createPost);

router
  .route('/posts/:postId')
  .get(getPost)
  .delete(deletePost)
  .put(updatePost);

export default router;

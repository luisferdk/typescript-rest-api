import { Request, Response, json } from 'express';

import { connect } from '../database';
import { Post } from '../interface/Posts';

export async function getAll(req: Request, res: Response) {
  const conn = await connect();
  const posts = await conn.query('SELECT * FROM posts');
  return res.json({
    message: 'Get All Posts',
    post: posts[0]
  });
}

export async function createPost(req: Request, res: Response) {
  const newPost: Post = req.body;
  const conn = await connect();
  const post = await conn.query('INSERT INTO posts SET ?', [newPost]);
  return res.json({
    message: 'Post Created',
    post: post
  });
}

export async function getPost(req: Request, res: Response) {
  const id = req.params.postId;
  const conn = await connect();
  const post = await conn.query('SELECT * FROM posts WHERE id = ?', [id]);
  return res.json({
    message:"Post Get",
    post:post[0]
  });
}


export async function deletePost(req: Request, res: Response) {
  const id = req.params.postId;
  const conn = await connect();
  const post = await conn.query('DELETE FROM posts WHERE id = ?', [id]);
  return res.json({
    message:"Post Deleted",
    post:id
  });
}


export async function updatePost(req: Request, res: Response) {
  const id = req.params.postId;
  const updatePost: Post = req.body;
  const conn = await connect();
  const post = await conn.query('UPDATE posts set ? WHERE id = ?', [updatePost,id]);
  return res.json({
    message:"Post Updated",
    post:id
  });
}
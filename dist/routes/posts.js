"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const posts_1 = require("../controllers/posts");
const router = express_1.Router();
router
    .route('/posts')
    .get(posts_1.getAll)
    .post(posts_1.createPost);
router
    .route('/posts/:postId')
    .get(posts_1.getPost)
    .delete(posts_1.deletePost)
    .put(posts_1.updatePost);
exports.default = router;

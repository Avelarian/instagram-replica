const express = require('express');
const PostController = require('./controllers/postController');
const uploadConfig = require('./config/upload');
const multer = require('multer');
const likeController = require('./controllers/likeController');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', likeController.store);

module.exports = routes;
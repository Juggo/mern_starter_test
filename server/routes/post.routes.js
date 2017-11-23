import { Router } from 'express';
import * as PostController from '../controllers/post.controller';
import * as ShopListController from '../controllers/shopList.controller';
const router = new Router();

// Get all Posts
router.route('/shoplists').get(ShopListController.getShopLists);

// Get one post by cuid
router.route('/shoplist/:cuid').get(ShopListController.getShopList);

// Get posts by name
router.route('/shoplists/:name').get(ShopListController.getShopListsByFilter);

// Add a new Post
router.route('/posts').post(ShopListController.addShopList);

// Delete a post by cuid
router.route('/posts/:cuid').delete(PostController.deletePost);

export default router;

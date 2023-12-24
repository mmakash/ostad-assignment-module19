const express = require('express');
const ProductController = require('../controller/ProductController');
const UserController = require('../controller/UserController');
const WishListController = require('../controller/WishListController');
const CartListController = require('../controller/CartListController');
const AuthVerification = require('../middlewere/AuthVerification');


const router = express.Router();


// products
router.get("/ProductBrandList", ProductController.ProductBrandList);
router.get("/ProductCategoryList", ProductController.ProductCategoryList);
router.get("/ProductSliderList", ProductController.ProductSliderList);
router.get("/ProductListByBrand/:BrandId", ProductController.ProductListByBrand);
router.get("/ProductListByCategory/:CategoryId", ProductController.ProductListByCategory);
router.get("/ProductListBySimilar/:CategoryId", ProductController.ProductListBySimilar);
router.get("/ProductListByKeyword/:keyword", ProductController.ProductListByKeyword);
router.get("/ProductListByRemark/:Remark", ProductController.ProductListByRemark);
router.get("/ProductDetail/:ProductId", ProductController.ProductDetail);
router.get("/ProductReviewList/:ProductId", ProductController.ProductReviewList);


// user
router.get("/UserOtp/:email", UserController.UserOtp);
router.get("/VerifyOtp/:email/:otp", UserController.VerifyOtp);
router.get("/UserLogOut",AuthVerification, UserController.UserLogOut);
router.post("/CreateProfile",AuthVerification, UserController.CreateProfile);
router.post("/UpdateProfile",AuthVerification, UserController.UpdateProfile);
router.get("/ReadProfile",AuthVerification, UserController.ReadProfile);

// wish
router.post("/SaveWishList",AuthVerification, WishListController.SaveWishList);
router.post("/RemoveWishList",AuthVerification, WishListController.RemoveWishList);
router.get("/WishList",AuthVerification, WishListController.WishList);

// Cart
router.post('/SaveCartList',AuthVerification,CartListController.SaveCartList)
router.post('/RemoveCartList',AuthVerification,CartListController.RemoveCartList)
router.get('/CartList',AuthVerification,CartListController.CartList)




module.exports = router;
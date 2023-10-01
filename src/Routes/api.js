const express = require("express");
const router = express.Router();

const userController = require("../Controller/userController");
const adminController = require("../Controller/adminController");
const subAdminController = require("../Controller/subAdminController");
const postController = require("../Controller/postController");

router.get("/one",userController.create);
router.get("/two",userController.read);
router.get("/three",userController.delete);
router.get("/four",userController.update);

router.get("/five",adminController.create);
router.get("/six",adminController.read);
router.get("/seven",adminController.delete);
router.get("/eight",adminController.update);

router.get("/nine",subAdminController.create);
router.get("/ten",subAdminController.read);
router.get("/eleven",subAdminController.delete);
router.get("/twelve",subAdminController.update);

router.get("/thirteen",postController.create);
router.get("/fourteen",postController.read);
router.get("/fifteen",postController.delete);
router.get("/sixteen",postController.update);

module.exports = router;
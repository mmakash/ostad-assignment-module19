const express = require("express");
const router = express.Router();

const blogController = require("../Controller/blogController");
const prodcutController = require("../Controller/productController");
const portfolioController = require("../Controller/portfolioController");
const messageController = require("../Controller/messageController");
const commentController = require("../Controller/commentController");

router.get("/one",blogController.create);
router.get("/two",blogController.read);
router.get("/three",blogController.delete);
router.get("/four",blogController.update);

router.get("/five",portfolioController.create);
router.get("/six",portfolioController.read);
router.get("/seven",portfolioController.delete);
router.get("/eight",portfolioController.update);

router.get("/nine",prodcutController.create);
router.get("/ten",prodcutController.read);
router.get("/eleven",prodcutController.delete);
router.get("/twelve",prodcutController.update);

router.get("/thirteen",messageController.create);
router.get("/fourteen",messageController.read);
router.get("/fifteen",messageController.delete);
router.get("/sixteen",messageController.update);

router.get("/seventeen",commentController.create);
router.get("/eighteen",commentController.read);
router.get("/nineteen",commentController.delete);
router.get("/twenty",commentController.update);

module.exports = router;
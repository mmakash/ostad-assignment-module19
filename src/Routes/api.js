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


router.get("/seventeen",portfolioController.create);
router.get("/eighteen",portfolioController.read);
router.get("/nineteen",portfolioController.delete);
router.get("/twenty",portfolioController.update);

router.get("/twentyone",prodcutController.create);
router.get("/twentytwo",prodcutController.read);
router.get("/twentythree",prodcutController.delete);
router.get("/twentyfour",prodcutController.update);



router.get("/twentynine",messageController.create);
router.get("/thirty",messageController.read);
router.get("/thirtyone",messageController.delete);
router.get("/thirtytwo",messageController.update);

router.get("/thirtythree",commentController.create);
router.get("/thirtyfour",commentController.read);
router.get("/thirtyfive",commentController.delete);
router.get("/thirtysix",commentController.update);



module.exports = router;
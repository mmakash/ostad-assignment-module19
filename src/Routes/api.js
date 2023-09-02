const express = require("express");
const router = express.Router();

const blogController = require("../Controller/blogController");
const titleController = require("../Controller/titleController");
const serviceController = require("../Controller/serviceController");
const projectController = require("../Controller/projectController");
const profitController = require("../Controller/profitController");
const prodcutController = require("../Controller/productController");
const portfolioController = require("../Controller/portfolioController");
const messageController = require("../Controller/messageController");
const commentController = require("../Controller/commentController");
const blogDetailsController = require("../Controller/blogDetailsController");

router.get("/one",blogController.create);
router.get("/two",blogController.read);
router.get("/three",blogController.delete);
router.get("/four",blogController.update);

router.get("/five",titleController.create);
router.get("/six",titleController.read);
router.get("/seven",titleController.delete);
router.get("/eight",titleController.update);

router.get("/nine",serviceController.create);
router.get("/ten",serviceController.read);
router.get("/eleven",serviceController.delete);
router.get("/twelve",serviceController.update);

router.get("/thirteen",projectController.create);
router.get("/fourteen",projectController.read);
router.get("/fifteen",projectController.delete);
router.get("/sixteen",projectController.update);

router.get("/seventeen",profitController.create);
router.get("/eighteen",profitController.read);
router.get("/nineteen",profitController.delete);
router.get("/twenty",profitController.update);

router.get("/twentyone",prodcutController.create);
router.get("/twentytwo",prodcutController.read);
router.get("/twentythree",prodcutController.delete);
router.get("/twentyfour",prodcutController.update);

router.get("/twentyfive",portfolioController.create);
router.get("/twentysix",portfolioController.read);
router.get("/twentyseven",portfolioController.delete);
router.get("/twentyeight",portfolioController.update);

router.get("/twentynine",messageController.create);
router.get("/thirty",messageController.read);
router.get("/thirtyone",messageController.delete);
router.get("/thirtytwo",messageController.update);

router.get("/thirtythree",commentController.create);
router.get("/thirtyfour",commentController.read);
router.get("/thirtyfive",commentController.delete);
router.get("/thirtysix",commentController.update);

router.get("/thirtyseven",blogDetailsController.create);
router.get("/thirtyeight",blogDetailsController.read);
router.get("/thirtynine",blogDetailsController.delete);
router.get("/fourty",blogDetailsController.update);

module.exports = router;
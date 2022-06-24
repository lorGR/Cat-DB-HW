"use strict";
exports.__esModule = true;
var express_1 = require("express");
var router = express_1["default"].Router();
var catsCtrl_1 = require("../controllers/catsCtrl");
router.get('/get-cats', catsCtrl_1.getCats);
router.post('/add-cat', catsCtrl_1.addCat);
router.patch('/get-cats-age', catsCtrl_1.getCatsByAge);
exports["default"] = router;

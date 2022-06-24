"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var CatSchema = new mongoose_1["default"].Schema({
    name: String,
    age: Number,
    color: String,
    image: String
});
var CatModel = mongoose_1["default"].model("MyCats", CatSchema);
exports["default"] = CatModel;

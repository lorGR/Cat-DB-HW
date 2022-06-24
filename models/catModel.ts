import mongoose from "mongoose";

const CatSchema = new mongoose.Schema({
    name: String,
    age: Number,
    color: String,
    image: String
});

const CatModel = mongoose.model("MyCats", CatSchema);

export default CatModel;
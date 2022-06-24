"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = express_1.default();
const port = process.env.port || 3000;
app.use(express_1.default.json());
app.use(express_1.default.static('public'));
mongoose_1.default
    .connect('mongodb+srv://Lior:Iz9Wr7PZQF91rlCe@cluster0.xfjftjk.mongodb.net/MyFirstDBretryWrites=true&w=majority')
    .then(() => { console.log('Connected to DB'); })
    .catch((error) => { console.error(error); });
app.get('/', (req, res) => {
    try {
        res.send(`Hello World`);
    }
    catch (error) {
        res.send({ error: error.message });
    }
});
const catRoutes_1 = __importDefault(require("./routes/catRoutes"));
app.use('/cats', catRoutes_1.default);
app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
});

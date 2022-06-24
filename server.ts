import express from 'express';
import mongoose from 'mongoose';
const app: express.Application = express();
const port = process.env.port || 3000;

app.use(express.json());
app.use(express.static('public'));

mongoose
    .connect('mongodb+srv://Lior:Iz9Wr7PZQF91rlCe@cluster0.xfjftjk.mongodb.net/MyFirstDBretryWrites=true&w=majority')
    .then(() => { console.log('Connected to DB') })
    .catch((error) => { console.error(error) });
app.get('/', (req: express.Request, res: express.Response) => {
    try {
        res.send(`Hello World`);
    } catch (error) {
        res.send({ error: error.message });
    }
});

import catRoutes from './routes/catRoutes';
app.use('/cats', catRoutes);

app.listen(port, () => {
    console.log(`server is running http://localhost:${port}`);
});
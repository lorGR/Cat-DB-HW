import express from 'express';
import CatModel from '../models/catModel';

export async function addCat(req: express.Request, res: express.Response) {
    try {
        const { name, age, color, image } = req.body;
        if(!name) throw new Error("Couldn't find name");
        if(!age) throw new Error("Couldn't find age");
        if(!color) throw new Error("Couldn't find color");
        if(!image) throw new Error("Couldn't find image");

        const newCat = new CatModel({name, age, color, image});

        const newCatDB = await newCat.save();
        
        res.send({cat: newCatDB });

    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getCats(req: express.Request , res: express.Response) {
    try{
        const catsDB = await CatModel.find();
        res.send({ catsDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}

export async function getCatsByAge(req: express.Request, res: express.Response) {
    try {
        const { age } = req.body;
        if(!age) throw new Error("Couldn't get age");
        const catsDB = await CatModel.find({age: age});
        res.send({ catsDB });
    } catch (error) {
        res.send({ error: error.message });
    }
}
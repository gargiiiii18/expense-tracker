import express from "express";
import cors from "cors";
import Transaction from "./models/Transaction.js"
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.get('/', (req, res)=>{
    res.json("test");
})

app.post('/transaction', async (req, res)=>{
    // console.log(process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL);
    const { name, price, dateTime, description } = req.body;
    const transaction = await Transaction.create({name, price, dateTime, description});
    res.json(transaction);
})

app.get('/transactions', async (req, res) => {
    await mongoose.connect(process.env.MONGO_URL);
    const transactions = await Transaction.find();
    res.json(transactions);   
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
})
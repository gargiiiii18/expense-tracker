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

app.post('/transaction', (req, res)=>{
    console.log(process.env.MONGO_URL);
    // mongoose.connect('');
    const { name, dateTime, description } = req.body;
    res.json(req.body);
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
})
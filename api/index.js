import express from "express";
const app = express();

app.get('/', (req, res)=>{
    res.json("test");
})

app.post("/api/transaction", (req, res)=>{
    res.json(req.body);
})

app.listen(3000, ()=>{
    console.log("Listening on port 3000...");
})
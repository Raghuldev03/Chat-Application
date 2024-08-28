import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    console.log("connected to mongodb");
})
    .catch((err) => {
    console.log(err);
    })

const app = express()

const PORT = process.env.PORT || 3000
    
app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
    console.log("Server is running on port "+ PORT)
})

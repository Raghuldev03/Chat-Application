import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser  from "cookie-parser"
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

app.use(express.json())
app.use(cookieParser())
    
app.get("/", (req, res) => {
  res.send("Hello");
});

// Routing
import authroute from "./routes/route.js"
import messageroute from "./routes/messageroute.js"
app.use("/api/auth", authroute);
app.use("/api/messages", messageroute);

app.listen(PORT, () => {
    console.log("Server is running on port "+ PORT)
})

//error handle
app.use((err, req, res, next) => { 
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"
    res.status(statusCode).json({ success:false, statusCode, message })
})  
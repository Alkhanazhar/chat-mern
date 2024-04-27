import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import mongoose from 'mongoose';
import userRoute from "./routes/userRoutes.js"
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";


dotenv.config()
const PORT = process.env.PORT || 8080;

// mongo db 
const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI).then(() => console.log("Connect to Mongo Server"))
    } catch (error) {
        console.log("mongoose error: " + error.message);
        process.exit()
    }
}
connectDb()
//initilaise server
const app = express();
app.use(cors())
app.use(express.json());

//routes

app.use("/api", userRoute)
app.use(notFound)
app.use(errorHandler)
app.get("/api/chat", (req, res) => {
    res.send({ "chats": "test" })
})
app.get("/api/chat/:id", (req, res) => {
    const { id } = req.params;
    res.send({ "chat id": id })
})

//listening on port
app.listen(PORT, () => {
    console.log("listening on port" + PORT)
})
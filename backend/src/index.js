import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { bookingRouter } from "./routes/bookingRouter.js";
import { propertyRouter } from "./routes/propertyRouter.js";
import { tripRouter } from "./routes/tripRouter.js";
import { router } from "./routes/userRoutes.js";


import connectDB from "./utils/db.js";

dotenv.config();

const app = express();

//express.json
app.use(express.json({limit:"100mb"}))

//urlencoded
app.use(express.urlencoded({limit:"100mb", extended:true}))

//cookieParser
app.use(cookieParser())

app.use(cors({
    origin: process.env.ORIGIN_ACCESS_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
}))

const port = process.env.PORT || 8080;


//test route
app.get("/",(req,res)=>{
    res.send("Homelyhub server is running")
})

app.use("/api/v1/rent/user",router)
app.use("/api/v1/rent/listing",propertyRouter)
app.use("/api/v1/rent/user/booking", bookingRouter)
app.use("/api/v1/rent/trip", tripRouter)


connectDB();

app.listen(port, () => {
    console.log(`App is running on port no: ${port}`);
});

export default app;
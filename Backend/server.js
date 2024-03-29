import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";
import cookieParser from "cookie-parser";

import userRoutes from "./Routes/userRoutes.js";
import postRoutes from "./Routes/postRoutes.js";

const app = express();

// dotenv config
dotenv.config();

// connect the database
connectDB();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/post", postRoutes);

//PORT
const port = process.env.PORT || 8080;

// port listen
app.listen(port, () => {
  console.log(`Server is connected`);
});

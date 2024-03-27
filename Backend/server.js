import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/connectDB";

const app = express();

// dotenv config
dotenv.config();

// connect the database
connectDB();

// middleware
app.use(express.json());

// Routes

//PORT
const port = process.env.PORT || 8080;

// port listen
app.listen(port, () => {
  console.log(`Server is connected`);
});

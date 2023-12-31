import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();
app.set("view engine", "ejs")
app.use(express.urlencoded({extended: false}))
// middleware
app.use(
  cors({
    origin: "http://localhost:5173", // Replace with your frontend URL
    credentials: true,
  })
);
app.use(express.json());

//Route
import UserRoute from "./Routes/UserRoute.js";

// Database Connect
const URI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.gksews0.mongodb.net/${process.env.DB_USER}?retryWrites=true&w=majority`;
// console.log(URI);
mongoose
  .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(port, () => console.log(`Server runnin on: ${port}`)))
  .catch((error) => console.log(`${error} did not connect`));

// API
app.use("/users", UserRoute);

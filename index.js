
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from 'cors'
import listRoute from './Routes/List/List.js'



dotenv.config();
const app = express();
const URI = `mongodb+srv://${process.env.AUTH_USER}:${process.env.AUTH_PASS}@cluster0.udwaqyp.mongodb.net/${process.env.AUTH_Collection}?retryWrites=true&w=majority`;
mongoose
  .connect(URI)
  .then(console.log("DB connection successful"))
  .catch((err) => console.log(err));

  app.use(express.json());
  app.use(express.urlencoded({extended: false}));
    app.use(cors());


//middleware
app.use("/api/list", listRoute);

app.listen(process.env.DEFAULT_PORT,()=>{
    console.log(`Server is running at port ${process.env.DEFAULT_PORT}`)
})
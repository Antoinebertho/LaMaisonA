import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { productRouter } from './routes/productRoute';
import { userRouter } from './routes/userRoute';

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/LMA');
  console.log('Connected to MongoDB');
}

dotenv.config();
const app = express();
app.use(express.json())
const port = process.env.PORT || 6000
app.use(express.urlencoded({extended: false}))
app.use("/api/products", productRouter)
app.use("/api/users", userRouter)
app.listen(port, ()=>console.log(`${port}`))
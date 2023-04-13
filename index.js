const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/coursesRoute');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/LMA');
  console.log('Connected to MongoDB');
}
const app = express();
const port = process.env.PORT || 6000
app.use(express.urlencoded({extended: false}))
app.use("/api/products", router)
app.listen(port, ()=>console.log(`${port}`))
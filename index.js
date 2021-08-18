import express from 'express';
import mongoose from 'mongoose';
import postsRouter from "./postsRouter.js";

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.alnua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use('/api', postsRouter)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    app.listen(PORT, () => {
      console.log('Server started on Port =' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

startApp()


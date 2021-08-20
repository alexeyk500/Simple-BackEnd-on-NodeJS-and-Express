import express from 'express';
import mongoose from 'mongoose';
import postRouter from "./PostRouter.js";
import fileUpload from 'express-fileupload'

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:user@cluster0.alnua.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const app = express();

app.use(express.json());
app.use(express.static('static'))
app.use(fileUpload({}));
app.use('/api', postRouter)

async function startApp() {
  try {
    await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    app.listen(PORT, () => {
      console.log('Server started on Port =' + PORT)
    })
  } catch (e) {
    console.log(e)
  }
}

startApp().then(() => {
})


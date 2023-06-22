import express from 'express';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.js'

dotenv.config();
const port = process.env.PORT;


const app = express();

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})


app.use('/api/posts',postRoutes);


const connectDB = async () => {
   try {
      mongoose.set('strictQuery',true);

      mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser : true,
        UseUnifiedTopology: true
      });

      console.log('MongoDB is connected');
   } catch (err) {
     console.error(err.message);
     process.exit(1);
   }
};

connectDB().then(()=>{
    app.listen(port, () => console.log(`listening on port ${port}`));
}).catch(err => console.log(err));


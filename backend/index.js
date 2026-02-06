import express from 'express';
import mongoose from'mongoose';
import cors from 'cors';
import morgan from ' morgan';
import dotenv from 'dotenv';
import  notesRouter  from  './router/notesRouter';


dotenv.config();
const app = express();


app.use(cors({origin :'*',credentials: true}))
app.use(express.json());
app.use(morgan('dev'));


app.use('/notes',notesRouter)


mongoose
.connect(process.env.MONGO_URL)
.then(() =>  console.log('MongoDB connected'));
.catch((err) => console.log('monogDB connection error:,err')); 


app.listen(process.env.PORT,'0.0.0.0'.() => {
    console.log(`server is listeninf to the port`&{process.env.PORT})
})
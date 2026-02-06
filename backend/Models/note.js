import mongoose from 'mongoose';

 const noteschema = new mongoose.schema({
    text:{type : string , required : true},
 });


 export default  mongoose.model('Note',noteschema);

 
 


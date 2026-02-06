import  express from 'express';
import Note from  '../Models/Note.js';
import { error } from 'node:console';

const router = express.Router();

router.get('/',async (res, req)=>{
    try{
        const notes = await Note.find( );
        res.json(notes);

    }catch (err){
        res.status(500).json({error: "server error"});
    }
});



router.post ('/',async (res,req)=>{
    try{
        const {text} =req.body;
        if (!text) return res.status(400).json({error : "text  is required"});
         const note = new Note({text});
         await note.save();
         res.json(note);

    }catch(err){
        res.status(500).json({error: "server error"});
    }
});

export default router;
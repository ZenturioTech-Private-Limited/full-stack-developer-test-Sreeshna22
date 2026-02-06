const { useState, useEffect, default: React } = require("react");

import {useState,useEffect}  from  React


export  default  function Notes(){
    const [notes ,setNotes] = useState([]);
    const [text,setText] = useState('');

    useEffect (() => {
        fetch('/api/notes')
        .then(res=> res.json())
        .then(data=> setNotes(data));
    },[]);




    const addNote =async() => {
        if (!Text) return;
        const res = await  fetch('/api/notes',{
            method : 'POST',
            header :{ 'Content-Type' : 'application/json'}
            body: JSON.stringify({text}),

        });
    }
}
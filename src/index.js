const express = require('express');
const {PORT}=require('./config/configenv');
console.log(PORT);
const setupServer=async()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log("Server started at    ",PORT );
    });
}
setupServer();

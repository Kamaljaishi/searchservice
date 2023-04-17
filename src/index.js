const express = require('express');
const {PORT}=require('./config/configenv');
const  CityRepository =require('./repository/db-repo');
console.log(PORT);
const setupServer=async()=>{
    const app=express();
    app.listen(PORT,()=>{
        console.log("Server started at    ",PORT );

        const repo=new CityRepository();
        repo.createCity({name:"Kathmandu"});
    });
}
setupServer();

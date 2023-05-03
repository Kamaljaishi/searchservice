const express = require('express');
const bodyParser = require("body-parser");
const {PORT}=require('./config/configenv');
const  CityRepository =require('./repository/db-repo');
console.log(PORT);
const ApiRoutes=require('./routes/index');
const setupServer=async()=>{
    const app=express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use('/api',ApiRoutes);
    app.listen(PORT,()=>{
        console.log("Server started at    ",PORT );

        const repo=new CityRepository();
        repo.createCity({name:"Kathmandu"});
    });
}
setupServer();

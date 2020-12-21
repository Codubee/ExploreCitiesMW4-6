const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/yelpGetThingsToDo',(req,res)=>{

    let zip = req.query.zip
    
    axios.get("https://api.yelp.com/v3/businesses/search?term=things%20to%20do&location="+zip,
        {headers:{authorization:process.env.YELP_KEY}})
    .then((response)=>{
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch((error)=>{
        console.log(error)
        res.status(400).json({error:"Error Occurred"})
    })
})

app.listen(port,()=>{
    console.log('API is up and running')
})

module.exports = app;
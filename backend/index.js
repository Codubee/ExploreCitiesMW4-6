const express = require('express');
const app = express();
const axios = require('axios');

require('dotenv').config();

app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/getRestaurant/:zip',(req,res)=>{
    console.log(req.params.zip)
    let zip = req.params.zip
    
    axios.get("https://api.yelp.com/v3/businesses/search?term=restaurants&location="+zip,
        {headers:{authorization:process.env.YELP_KEY}})
    .then((response)=>{
        console.log(response.data)
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
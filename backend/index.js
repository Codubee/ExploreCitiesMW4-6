const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
})

app.get('/weatherbit/:zip',(req,res)=>{
    console.log(req.params.zip)
    let zip = req.params.zip
    const api_key = process.env.WEATHER_API_KEY
    axios.get("https://api.weatherbit.io/v2.0/current?postal_code="+zip +"&units=I&key="+api_key)
    .then((response)=>{
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch((error)=>{
        console.log(error)
        res.status(400).json({error:"Error Occurred"})
    })
})
module.exports = app;
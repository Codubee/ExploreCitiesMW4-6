const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

app.get('/zipcodesInRadius/',(req,res)=>{
    let zip = req.query.zip
    let distance = req.query.distance
    const key = process.env.ZIP_KEY
    axios.get("https://www.zipcodeapi.com/rest/"+key+"/radius.json/"+zip+"/"+distance+"/km")
    .then((response)=>{
        console.log(response)
        res.status(200).json(response.data)
    })
    .catch((error)=>{
        console.log(error)
        res.status(400).json({error:"Error Occurred"})
    })
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
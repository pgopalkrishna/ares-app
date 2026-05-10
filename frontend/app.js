// express js app that serves html files

const { argon2Sync } = require('crypto');
const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
const URL = process.env.BACKEND_URL || 'http://127.0.0.1:8000/api';

const fetch = (...args) => 
    import('node-fetch').then(({default: fetch}) => fetch(...args));

app.get('/', async function(req, res){
    const options = {
        method: 'GET',
    };
    fetch(URL,options)
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(err => {console.log('error:', err)});
    try{
        let response = await fetch(URL, options);
         data = await response.json();
        res.render('index',  {data: data.names });
    }
    catch(err){
        console.log(err);
        res.status(500).json({msg:`Internal Server Error`});
    }
});

app.listen(port, () => {
  console.log(`Frontend app listening at http://localhost:${port}`);
});
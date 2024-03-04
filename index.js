const express = require('express');
const app = express();

const isOdd=(req,res)=>{
    const number = parseInt(req.params.number);
    if(number % 2 === 0 ){
        res.json('true')
    }else{
        res.json('false')
    }
    
};

app.get("/",(req,res)=>
    res.send("Hello World")
)

app.get('/isOdd/:number',isOdd)

const server = app.listen(3001,()=> console.log('running on port 3001'))

module.exports = {server,isOdd}
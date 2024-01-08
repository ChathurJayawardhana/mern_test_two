const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const router = require('./router')


app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://thara:thara@thara.g1bvjsn.mongodb.net/?retryWrites=true&w=majority'

const connect = async () =>{
    try {
        await mongoose.connect(uri);
        console.log('conect to database');
    } catch (error) {
        console.log('error',error);
    }
}

connect();

const server = app.listen(3001,'localhost',()=>{
    console.log(`node serve is listining to ${server.address().port}`)
})

app.use('/api',router)
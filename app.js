const fs = require('fs');
const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/webHookRoutes');
const uuid = require('uuid');

const env =require('dotenv');
const cors = require('cors');
const {fn} =require('./connections/connection');
const { UUID } = require('bson');

const app =express();

// const uuid = uuid.v1();

env.config({path:'./.env'})

app.use(express.json());
app.use(cors());

app.use('/api/v1', router);
app.use('/webhook/v1',router);
fn()
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`App running on port ${port}`);
});
const express = require('express');
const cors = require('cors');
require('dotenv').config()
const routes = require('./routes');
const app = express();

app.use(cors())

app.use(express.json())
app.use(routes)


app.listen(process.env.SERVER_PORT || 5000,()=>{
    console.log(`App is running on PORT ${process.env.SERVER_PORT}`)
})
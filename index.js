const express = require('express');
const cors = require('cors');
require('dotenv').config()
const routes = require('./routes');
const { HealthCheck } = require('./controllers');
const app = express();

app.use(cors())

app.use(express.json())
app.get('/', HealthCheck)
app.use(routes)

const port = process.env.SERVER_PORT || 5000

app.listen(port, () => {
    console.log(`App is running on PORT ${process.env.SERVER_PORT}`)
})
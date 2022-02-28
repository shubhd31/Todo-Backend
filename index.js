const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require("mongoose")
const { errorHandler } = require('./middleware/errorMiddleware')

const router = require('./routes/users')
const cors = require('cors');

const port = process.env.PORT || 5000
const app = express();
app.use(cors())

app.use(express.json());
app.use('/', router)

app.use(errorHandler)
require("./db/mongoose");
app.listen(port)
console.log(port);






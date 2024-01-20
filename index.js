
const express = require('express')
require('dotenv').config()
require('./db/connection')
const cors = require('cors');
const route = require('./routes/router')

const app = express()
app.use(express.json())
app.use(cors())
app.use(route)

app.get('/', (req, res) => {
    res.status(200).json("working")
})

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("server listening on port 3000"))
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cookieParser())


const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`server listening on ${PORT}`))
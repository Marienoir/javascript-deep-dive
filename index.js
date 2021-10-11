const express = require('express')
const app = express()
const router = require('./src/router')
const connectDB = require('./src/config/connect')

app.use('/api', router)

const start = async () => {
    try {
        await connectDB // connect to Database
        app.listen(process.env.PORT || 3000)
    } catch (error) {
        console.log(error)
    }
}

start()
const express = require('express')
const app = express()
const router = require('./src/router')
const connectDB = require('./src/config/connect')

app.use('/api', router)

const start = async () => {
    try {
        // connect to Database
        await connectDB
        app.listen(process.env.PORT || 3000)
    } catch (error) {
        console.log(error)
    }
}

start()
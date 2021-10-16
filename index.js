const express = require('express')
const app = express()
var path = require('path')
const bodyParser = require('body-parser')
const router = require('./src/routes')
const viewRouter = require('./frontend/src/routes')
const connectDB = require('./src/config/connect')

app.use(bodyParser.json());
app.use('/api', router);
app.use(express.static('public'));
app.use(express.static('views'));
app.use('/', viewRouter);

const bootstrap = async () => {
    try {
        await connectDB // connect to Database
        app.listen(process.env.PORT || 3000)
    } catch (error) {
        console.log(error)
    }
}

bootstrap()
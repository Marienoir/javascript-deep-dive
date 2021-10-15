const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const router = require('./src/router')
const viewRouter = require('./src/view-router')
const connectDB = require('./src/config/connect')

app.use(bodyParser.json());
app.use('/api', router);
// app.use(express.static(__dirname));
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
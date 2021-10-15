const express = require('express')
const app = express()
var path = require('path')
const bodyParser = require('body-parser')
const router = require('./src/router')
const viewRouter = require('./src/view-router')
const connectDB = require('./src/config/connect')

app.use(bodyParser.json());
app.use('/api', router);
console.log(__dirname)
app.use(express.static(path.join(__dirname, 'public')));


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
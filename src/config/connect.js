const mongoose = require('mongoose')
require('dotenv/config')

const connectDB = mongoose.connect(process.env.DB_CONNECTION, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                .then(response => console.log('Connected Successful'))
                .catch(err =>  console.log(err))

module.exports = connectDB

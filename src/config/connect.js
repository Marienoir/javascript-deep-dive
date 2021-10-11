const mongoose = require('mongoose')
require('dotenv/config')

const connectDB = mongoose.connect(process.env.DB_CONNECTION, {
                    useNewUrlParser: true,
                    useUnifiedTopology: true,
                })
                .then(response => console.log(`Connected ${response}`))
                .catch(err =>  console.log(err))

module.exports = connectDB

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://root:<password>@cluster0.jo3ou.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//     const collection = client.db("test").collection("devices");
//     // perform actions on the collection object
//     client.close();
// });
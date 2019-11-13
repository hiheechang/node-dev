/*
npm i  mongodb
CRUD operation

*/

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient // help connect to DB

const connectionURL = 'mongodb://127.0.0.1:27017' // localhost:127.0.0.1
const databaseName = 'task-manager' // db name

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if ( error ) {
        return console.log('unable to connect to DB')
    }

    console.log("connected")

    const db = client.db(databaseName)

    db.collection('users').insertOne({
        name: 'heechang',
        age: 22
    })
});
const mongoose = require('mongoose'), dbURI =  'mongodb://localhost:27017/girlscript';
var MongoClient = require('mongodb').MongoClient;
// Create the database connection


mongoose.connect(dbURI);
// mongodb+srv://kay:myRealPassword@cluster0.mongodb.net/test
// mongodb+srv://dipakparmar:<PASSWORD>@cluster0-zw0tz.mongodb.net/test?retryWrites=true

// CONNECTION EVENTS

// When successfully connected
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {
    console.log('Connection url '+dbURI);
    console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});
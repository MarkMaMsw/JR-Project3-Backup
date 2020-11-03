//react-script4.0.0, node version 14.9.0
const mongoose = require( "mongoose" );
const uri = 'mongodb+srv://Admin:JRPROJECT123@jrproject3.1jeqp.mongodb.net/jrproject?retryWrites=true&w=majority';

mongoose.createConnection(uri,{useNewUrlParser: true});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection succeeds');
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error:' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
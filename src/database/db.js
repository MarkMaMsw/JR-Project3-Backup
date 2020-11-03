//react-script4.0.0, node version 14.9.0
import mongoose, {connect, connection} from "mongoose";
const uri = 'mongodb+srv://Admin:JRPROJECT123@jrproject3.1jeqp.mongodb.net/jrproject?retryWrites=true&w=majority';

mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', function(){
    console.log('Mongoose connection succeeds');
});

mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error:' + err);
});

mongoose.connection.on('disconnected', function(){
    console.log('Mongoose connection disconnected');
});

module.exports = mongoose;
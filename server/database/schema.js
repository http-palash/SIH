const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },
    aadhar:{
        type:String,
        required:true
    },
    dropout_class:{
        type:String,
        required:true
    },
    school_college:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    religion:{
        type:String,
        required:true
    },
    dropout_reasons:{
        type:String,
        required:true
    },
    how_can_we_help:{
        type:String,
        required:true
    },
    area:{
        type:String,
        required:true
    },
    classes:{
        type:String,
        required:true
    },
    reasons:{
        type:String,
        required:true
    }
})

const User = mongoose.model('RESPONSE',Schema);

module.exports = User;
const mongoose = require('mongoose');

const ApplyNowSchema = new mongoose.Schema({
    name: String,
    number: {type:String},
    pannumber: {
        type: String,
        uppercase: true,
        match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number"]
        },
    
    mobileno: {
        type: String,
        match: [/^[0-9]{10}$/, "Invalid mobile number"]
            },
    address: {type:String},
    gender: {type:String,enum:["male","female"]},
    dob: {type:Date,default:Date.now},
    city: {type:String},
    state: {type:String},
    email: {type:String,required:true, unique:true, lowercase:true},
    pincode: {type:String,maxlength:6}
},
{timestamps:true}
);

module.exports = mongoose.model("ApplyNow", ApplyNowSchema);
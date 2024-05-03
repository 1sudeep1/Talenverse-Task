//importing mongoose
const mongoose = require('mongoose');
const { Schema } = mongoose;

//defining model schema for contact
const contactSchema = new Schema({ 
    fullName: String,// String is shorthand for {type: String}
    email:{type:String, unique:true, required:true},
    phone:{type:Number, unique:true, required:true},
    getTouch: String,
    message:String,
    isAgreed:Boolean
  });
  
  const Contact = mongoose.model('Contact', contactSchema);
  
  //exporting the contact model
  module.exports=Contact
const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
  productID:{type:mongoose.Schema.Types.ObjectId},
  userID:{type:mongoose.Schema.Types.ObjectId},
  des:{type:String,required:true},
  rating:{type:String,required:true}
  
},{timestamps:true,versionkey:false}
);
const ReviewModel=mongoose.model('reviews',DataSchema);
module.exports=ReviewModel;
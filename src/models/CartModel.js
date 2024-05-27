const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
  productID:{type:mongoose.Schema.Types.ObjectId},
  userID:{type:mongoose.Schema.Types.ObjectId},
  color:{type:String,required:true},
  qty:{type:String,required:true},
  size:{type:String,required:true}

},{timestamps:true,versionkey:false}
);
const CartModel=mongoose.model('carts',DataSchema);
module.exports=CartModel;
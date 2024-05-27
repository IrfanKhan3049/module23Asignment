const mongoose = require('mongoose');

const DataSchema=mongoose.Schema({
  productID:{type:mongoose.Schema.Types.ObjectId},
  userID:{type:mongoose.Schema.Types.ObjectId}

},{timestamps:true,versionkey:false}
);
const WishModel=mongoose.model('wishes',DataSchema);
module.exports=WishModel;
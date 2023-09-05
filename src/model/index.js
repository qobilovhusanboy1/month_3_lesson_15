const {Schema, model} = require("mongoose");


const schema = new Schema(
  {
    fullname:{
      type:String,
      required:true
    },
    username:{
      type:String,
      required:true,
      unique:true
    }
    ,
    description: {
      type: String,
      required: true,
      trim: true,
    },
    nowjob: {
      type:String,
      default:false,
    }
  }
);




module.exports = model("Todo", schema);
const {Schema, model} = require("mongoose");


const Job = new Schema(
    {
      work_id:{
        type: Number,
        required: true,
        unique: true,
      },
      job:{
        type: String,
        allowNull: false
      },
      payment:{
        type: Number,
        allowNull: false
      },
      who_worker_username:{
        type: String,
        default:false
      }
    }
)

module.exports = model("workers", Job);
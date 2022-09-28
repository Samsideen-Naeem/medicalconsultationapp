const mongoose = require("mongoose") 

const medicalSchema = mongoose.Schema({
    profession: {
        type: String,
        required: true,
        unique: true
    },
    licensenumber: {
        type: String,
        required:true
    },
     yearsofexperience: {
        type: String,
        required: true
    },
    expertise: {
        type: Array,
        required: true,
        
    },
   
    Address:{
        gps: String,
        box: String
    },


    contact: {
        phone: String,
        email:String,
    }

}, {
    timestamps:true
}
)
const Medical = mongoose.model("medical", medicalSchema)
module.exports=Medical



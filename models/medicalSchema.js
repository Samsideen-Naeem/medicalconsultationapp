const mongoose = require("mongoose") 

const mediclaSchema = mongoose.Schema({
    medicalname: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required: true
    },
    facilities: {
        type: Array,
        required: true,
        
    },
    numOfHealthprofessionals: {
        type: Number,
        required:true
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



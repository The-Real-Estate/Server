const mongoose = require('mongoose'); //third party

const Hire = mongoose.model('Hire',{
    HireName: {
        type:String,
        required : true
    },
    HirePhone: {
        type: String,
        required: true
    },
    ArtistName:{
        type : String,
        required: true
    },
    ArtistPhone:{
        type : String,
        required: true
    }
})
module.exports = Hire;
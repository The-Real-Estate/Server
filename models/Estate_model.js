const mongoose = require('mongoose');

const Estate = mongoose.model('Estate',{
    OwnerName : {
        type : String,
        required : true
    },
    EstateName : {
        type : String,
        required : true
    },
    Address: {
        type : String,
        required : true
    },
    Phone: {
        type : String,
        required : true
    },
    Email: {
        type : String,
        required : true
    },
    Description: {
        type : String,
        required : true
    },
    Pimage: {
        type : String
       
    },
    PriceRate: {
        type : String,
        required : true
    }
   
})
module.exports=Estate;
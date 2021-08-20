const mongoose = require('mongoose'); //third party

const User = mongoose.model('User', {
    FullName: {
        type: String,
        required: true
    },
    Address: {
        type: String,
        required: true
    },
    PhoneNo: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    }
})
module.exports = User;
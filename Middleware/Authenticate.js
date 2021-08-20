const jwt = require('jsonwebtoken');
const User = require('../models/Estate_model');


module.exports.verifyUser = function (req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]
        // console.log(token);
        const data = jwt.verify(token, 'anysecretkey');
        console.log(data);
        User.findOne({ _id: data.userId })
            .then(function (result) {
                req.user = result;

                next();
            })
            .catch(function (e) {
                res.status(400).json({ message: e })
            })
    }
    catch (e) {

        res.status(401).json({ error: e })
    }



}
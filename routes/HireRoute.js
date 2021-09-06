const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const Hire = require('../models/HireModel');
const jwt = require('jsonwebtoken');
const router = express.Router();
const auth = require('../Middleware/Authenticate')

router.post('/hire/insert', function (req, res) {
    console.log(req.body)
   
    
        //valid
        const HireName = req.body.HireName;
        const HirePhone = req.body.HirePhone;
        const ArtistName = req.body.ArtistName;
        const ArtistPhone = req.body.ArtistPhone;
           // console.log(us);
        // console.log(add); 
        
            const data = new Hire({
                HireName: HireName,
                HirePhone: HirePhone,
                ArtistName: ArtistName,
                ArtistPhone: ArtistPhone,
             
            });

            data.save()
            
            .then(function (result) {
                
                console.log(data)
                return res.status(201).json({ success:true,message: "Registration success !!!!" })
            })// sucessess vayo ki vaena
            .catch(function (err45) {
                console.log(err45)
                res.status(500).json({ error: err45 })
            })// error aayo ki aayena
        })
        
router.get('/register_show', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    Hire.find().then(function (data) {
        // console.log(data);
        res.send(data);
    })
})

// for delete
router.delete('/register_delete/:id', auth.verifyUser, function (req, res) {
    //delete code
    const id = req.params.id;
    Hire.deleteOne({ _id: id }).then(function () {
        res.send("Deleted !")
    })

})
// for update
router.put('/register_update/:id', function (req, res) {
    const id = req.params.id;
    const book_name = req.body.book_name;
    Hire.updateOne({ _id: id }, { Email: Email }).then(function () {
        res.send("Updated!")
    })
})
module.exports = router;
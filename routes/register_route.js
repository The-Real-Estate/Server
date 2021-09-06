const express = require('express');
const { check, validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const User = require('../models/register_model');
const jwt = require('jsonwebtoken');
const router = express.Router();
const auth = require('../Middleware/Authenticate')
const upload = require('../Middleware/Upload');

router.post('/user/post', function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    // res.send(errors.array());
    if (errors.isEmpty) {
        //valid
        const FullName = req.body.FullName;
        const Address = req.body.Address;
        const PhoneNo = req.body.PhoneNo;
        const Username = req.body.Username;
        const Password = req.body.Password;
        // console.log(us);
        // console.log(add); 
        bcryptjs.hash(Password, 10, function (err, hash) {
            const data = new User({
                FullName: FullName,
                Address: Address,
                PhoneNo: PhoneNo,
                Username: Username,
            
                Password: hash
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

    }
    else {  
        //invalid
        res.status(400).json(errors.array());
    }
})

//Login System .........................
router.post('/user/login', function (req, res) {
    const username = req.body.Username;
    const password = req.body.Password;
    console.log(username, password)
    User.findOne({ Username: username })
        .then(function (userData1) {
            //if username doesnot exist
            if (userData1 === null) {
                return res.status(401).json({ error: "Invalid Credentials !! " })
            }
            // if username exists
            bcryptjs.compare(password, userData1.Password, function (err, result) {
                if (result === false) {
                    //password worng
                    return res.status(401).json({ error: "Invalid Credentials !!" })
                }
                //then generate token - ticket
                const token = jwt.sign({ UserId: userData1._id }, 'anysecrectkey')
                console.log("Login vayo")
                // res.send(token)
                return res.status(200).json({
                    success:true, 
                    token:token
                })
            })
        })
        .catch(function (e) {
            console.log(e)
            res.status(500).json({ message: e })
        })
})


router.get('/register_show', auth.verifyUser, function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    User.findOne({_id : req.user._id}).then(function (data) {
        // console.log(data);
        res.send({
            success : true,
            user :data
        });
    })
})

 //for delete
router.delete('/register_delete/:id', auth.verifyUser, function (req, res) {
delete code
  const id = req.params.id;
     Register.deleteOne({ _id: id }).then(function () {
         res.send("Deleted !")
     })

 })
 // for update
router.put('/register_update/:id', function (req, res) {
    const id = req.params.id;
    const book_name = req.body.book_name;
   Register.updateOne({ _id: id }, { FullName: FullName },{Address:Address},{PhoneNo:PhoneNo},{Username:Username},{Password:Password}).then(function () {
       res.send("Updated!")
   })

 })

router.delete('/artist/delete/:id', function(req,res){
    //delete code
    const id = req.params.id;
    User.deleteOne({_id : id})
    .then((result)=>{
        res.status(200).json({message : "deleted !!"})
    })
    .catch((e)=>{
        res.status(500).json({error : e})
    })
    
    })
    
// for update
router.put('/register/update', function(req,res){
    console.log(req.body)
    const id = req.body.id;
    const FullName = req.body.FullName;
    User.updateOne({_id : id},{FullName : FullName,Address : Address, PhoneNo:PhoneNo,Username:Username,Password:Password}).then(function(){
        res.status(200).json({message : true})
    })
    .catch(function(err){
        console.log(err)
    })
})
module.exports = router;
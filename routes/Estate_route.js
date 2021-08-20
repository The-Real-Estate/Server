const express = require('express');
const Estate = require('../models/Estate_model');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Authenticate = require('../Middleware/Authenticate');
const upload = require('../Middleware/Upload');


router.post('/estate/post',/*auth.verifyUser, auth.verifyDocter,*/ upload.single('Pimage'), function (req, res) {
    console.log(req.body)
    const errors = validationResult(req);

    if (errors.isEmpty) {

        const OwnerName = req.body.OwnerName;
        const EstateName = req.body.EstateName;
        const Address = req.body.Address;
        const Email = req.body.Email;
        const Phone = req.body.Phone;
        const path = req.file.path;
        const Description = req.body.Description;
        const PriceRate = req.body.PriceRate;
        const pdata = new Estate({
            OwnerName: OwnerName,
            EstateName: EstateName,
            Address: Address,
            Email: Email,
            Phone: Phone,
            Pimage: "/Images/" + req.file.filename,
            Description: Description,
            PriceRate: PriceRate
        })
        pdata.save()
            .then(function (res) {
                res.status(201).json({ messge: "Successfully added!!" })
            })
            .catch(function (eeeeee) {
                res.status(500).json({ message: eeeeee })
            })
    }
    else {
        //invalid
        res.status(400).json(errors.array());
    }

})

router.get('/estate/show', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    Estate.find().then(function (data) {
        // console.log(data);
        res.json({ data: data, success: true });
    })
})

router.get('/estate/single/:id', function (req, res) {
    // console.log("this is for showing data")
    // res.send("test show")
    //console.log(req.body)
    Estate.findOne({ _id: req.params.id })
        .then(function (data) {
            console.log(data);
            res.status(200).json(data);
        })
        .catch(function (e) {
            res.status(500).json({ error: e })
        })
})


// for delete
router.delete('/estate/delete/:id', function (req, res) {
    //delete code
    const id = req.params.id;
    Estate.deleteOne({ _id: id })
        .then((result) => {
            res.status(200).json({ message: "deleted !!" })
        })
        .catch((e) => {
            res.status(500).json({ error: e })
        })

})

// for update
router.put('/estate/update', function (req, res) {
    console.log(req.body)
    const id = req.body.id;
    const FullName = req.body.FullName;
    const Profession = req.body.Profession;
    const PriceRate = req.body.PriceRate;
    Estate.updateOne({ _id: id }, { FullName: FullName, Profession: Profession, PriceRate: PriceRate }).then(function () {
        res.status(200).json({ message: true })
    })
        .catch(function (err) {
            console.log(err)
        })
})
module.exports = router;
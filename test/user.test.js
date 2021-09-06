// use the path of your model
const forbuyer = require('../models/register_model');


const mongoose = require('mongoose');
// use the new name of the database
const url = 'mongodb://127.0.0.1:27017/RealEstate';
beforeAll(async () => {
 await mongoose.connect(url, {
 useNewUrlParser: true,
 useCreateIndex: true
 });
});
afterAll(async () => {
 await mongoose.connection.close();
});

describe('Register Test', () => {
// the code below is for insert testing
 it('Register testing anything', () => {
 const fb = {
 'FullName':'Bishal Budha',
 'Address': 'Kapan',
 'PhoneNo': '9868553378',
 'Username':'bishal',
 'Password':'bishal'
 };
 
 return forbuyer.create(fb)
 .then((pro_ret) => {
expect(pro_ret.FullName).toEqual('Bishal Budha');
expect(pro_ret.Address).toEqual('Kapan');
expect(pro_ret.PhoneNo).toEqual('9868553378');
expect(pro_ret.Username).toEqual('bishal');
expect(pro_ret.Password).toEqual('bishal');
 });
 });
})

//login user test

it("User Login testing", async()=>{
    const fb ={
        "Username":"bishal",
        "Password":"bishal"
    }
    return forbuyer.findOne({fb});

})
 //update user profile

it("Update forbuyer profile", async()=>{
    const pro = await forbuyer.updateOne({
        "Username":Object("Bishal Budha")
    },
    {
        $set:{
            "PhoneNo":"981818181",
            "Address":"test"
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete user profile

it("delete profile",async()=>{
    const status = await forbuyer.deleteOne({
        "Username":Object("Bishal Budha")
    });
    expect(status.ok).toBe(1);
}
)
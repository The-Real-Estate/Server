// use the path of your model
const Buyer = require('../models/register_model');


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
 'Address':'Baluwatar',
 'PhoneNo': '9868553378',
 'Username': 'bhatte',
 'Password':'bhatte',
 
 };
 
 return Buyer.create(fb)
 .then((pro_ret) => {
expect(pro_ret.FullName).toEqual('Bishal Budha');
expect(pro_ret.Address).toEqual('Baluwatar');
expect(pro_ret.PhoneNo).toEqual('9868553378');
expect(pro_ret.Username).toEqual('bhatte');
expect(pro_ret.Password).toEqual('bhatte');
 });
 });
})

//login user test

it("User Login testing", async()=>{
    const User ={
        "Username":"bhatte",
        "Password":"bhatte"
    }
    return Buyer.findOne({User});

})

 //update user profile

it("Update forhire profile", async()=>{
    const pro = await Buyer.updateOne({
        "FullName":Object("Bishal Budha")
    },
    {
        $set:{
            "PhoneNo":"986969679",
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete user profile

it("delete profile",async()=>{
    const status = await Buyer.deleteOne({
        "FullName":Object("Bishal Budha")
    });
    expect(status.ok).toBe(1);
}
)

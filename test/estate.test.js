// use the path of your model
const estate = require('../models/Estate_model');


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
 const fe = {
 'OwnerName':'Bishal',
 'EstateName': 'thulo',
 'Address': 'sankhamul',
 'Phone':'98696969',
 'Email':'this@thi.com',
 'Description':'estate work',
 'PriceRate':'7000'
 
 };
 
 return estate.create(fe)
 .then((pro_ret) => {
expect(pro_ret.OwnerName).toEqual('Bishal');
expect(pro_ret.EstateName).toEqual('thulo');
expect(pro_ret.Address).toEqual('sankhamul');
expect(pro_ret.Phone).toEqual('98696969');
expect(pro_ret.Email).toEqual('this@thi.com');
expect(pro_ret.Description).toEqual('estate work');
expect(pro_ret.PriceRate).toEqual('7000');
 });
 });
})

 //update user profile

it("Update forhire profile", async()=>{
    const pro = await estate.updateOne({
        "Email":Object("this@thi.com")
    },
    {
        $set:{
            "Phone":"986969569",
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete user profile

it("delete profile",async()=>{
    const status = await estate.deleteOne({
        "OwnerName":Object("Bishal")
    });
    expect(status.ok).toBe(1);
}
)
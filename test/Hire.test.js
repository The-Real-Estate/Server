// use the path of your model
const forhire = require('../models/HireModel');


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
 const fh = {
 'HireName':'Bishal Budha',
 'HirePhone': '9868553378',
 'ArtistName': 'bhatte',
 'ArtistPhone':'98696969',
 
 };
 
 return forhire.create(fh)
 .then((pro_ret) => {
expect(pro_ret.HireName).toEqual('Bishal Budha');
expect(pro_ret.HirePhone).toEqual('9868553378');
expect(pro_ret.ArtistName).toEqual('bhatte');
expect(pro_ret.ArtistPhone).toEqual('98696969');
 });
 });
})

 //update user profile

it("Update forhire profile", async()=>{
    const pro = await forhire.updateOne({
        "HireName":Object("Bishal Budha")
    },
    {
        $set:{
            "HirePhone":"98696969",
        }
    })
    expect(pro.ok).toBe(1)

}
)

//delete user profile

it("delete profile",async()=>{
    const status = await forhire.deleteOne({
        "HireName":Object("Bishal Budha")
    });
    expect(status.ok).toBe(1);
}
)
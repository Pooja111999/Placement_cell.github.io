// const mongoose = require('mongoose');
// async function main(){
//     await mongoose.connect('mongodb+srv://placement:1UbhMXi13RXuCwSn@cluster0.p5gbb.mongodb.net/placementcell?retryWrites=true&w=majority');
//     console.log("connection Successfull !! ");
// }
// main().catch(error =>console.log("connection not successfull !!"));
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const mongoDB = "mongodb+srv://new_CSV:new_CSV@cluster0.gbjrkub.mongodb.net/placement?retryWrites=true&w=majority"; 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
  console.log('connected');
}

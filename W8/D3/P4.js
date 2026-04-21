// Basics of embedding and referencing
const mongoose = require("mongoose");
const { type } = require("node:os");
async function main() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/embrel');
        console.log("Connected to MongoDB");

        const orderSchema = new mongoose.Schema ({
            product:String,
            price:Number
        });
        const userSchema = new  mongoose.Schema({
            name:String,
            orders:[orderSchema]
        });
        const User = mongoose.model('User',userSchema);
        const embeddedUser = await User.create({
            name:"Rakesh",
            orders:[
                {product:"Laptop",price:50000},
                {product:"printer",price:10000},
                {product:"Projector",price:70000},
            ]
        });
        console.log("User:\n");
        // console.log(embeddedUser);  only used for single data while the rest r used for all the user
        console.users= await User.find().lean();
        console.log(JSON.stringify(users,null,2))

        // Referencing
        const userRefSchema = new mongoose.Schema({
            name:String
        });
        const orderRefSchema = new mongoose.Schema({
            produrt:String,
            price:Number,
            user:{
                type:mongoose.Schema.Types.ObjectId,
                ref: 'UserRef'
            }
        });
        const UserRef = mongoose.model('UserRef',userRefSchema);
        const OrderRef = mongoose.model('OrderRef',orderRefSchema);

        const refUser = await User.create({name:"Rakesh"});
        await OrderRef.create([
            {product:"Phone",price:70000,user:refUser._id},
            {product:"Charger",price:2000,user:refUser._id},
        ]);
        console.log("Referenced Order");
        console.log(await orderRef.find().populate('user'));
    }
    catch(error){
        console.error("Error:",error.message);
    }
    finally{
        await mongoose.disconnect();
        console.log("Disconnected from DB.");
    }
}
main();
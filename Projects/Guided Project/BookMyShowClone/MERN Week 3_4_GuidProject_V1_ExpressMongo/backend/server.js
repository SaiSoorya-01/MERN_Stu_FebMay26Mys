// Load enveronment variables
require("dotenv").config();

const app = require("./app.js");
const connectDB = require("./src/config/db.js");
// connectDB
connectDB();
// post configurtation
const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`server running on port $(PORT)`);
});
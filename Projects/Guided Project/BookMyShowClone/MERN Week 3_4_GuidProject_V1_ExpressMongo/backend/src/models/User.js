const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is requuired"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Name is requuired"],
        unique: true,
        lowercase: true,
        match: [/^\S+@\S+\.\S+$/, "Please use valid email"],
        index: true,
    },
    password: {
        type: String,
        required: [true, "passward is requuired"],
        minlength: 6,
        select: false,
    },
    role: {
    type: String,       // correct
    enum: ["user", "admin"],
    default: "user",
},
    isVerified: {
        type: Boolean,
        default: false,
    },

},
{
    timestamps: true,
}
);
// Hashing the password before saving 
userSchema.pre("save",async function () {
    if (!this.isModified("password")) {
        return;
    }
    try{
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password,saltRounds);
    }
    catch(error){
        throw error;
    }
});

// Compare password function
userSchema.methods.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword,this.password);
};

module.exports = mongoose.model("User",userSchema);
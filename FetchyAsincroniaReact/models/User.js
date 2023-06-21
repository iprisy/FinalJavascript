const mongoose=require("mongoose");
const UserSchema= new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please provide a name"]
    },
    email:{
        type: String,
        required: [true, "please provide an email"],
        unique:true
    }, 
    password:{
        type: String,
        required: [true, "please provide a password"],        
    },

    city:{
        type: String,
        required: [true, "please provide a city"],
    }
});
module.exports = mongoose.model("User",UserSchema);

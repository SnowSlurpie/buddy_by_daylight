const mongoose = require("mongoose");

const killerPowerSchema = new mongoose.Schema({
    powerId: {
        type:Number,
        required: [true, "Invalid Power Id!"],
        unique: true,
    },
    
    powerName: {
        type:String,
        required: [true, "Invalid Power Name!"],
        unique: true,
    },
    
    powerCode: {
        type:String,
        required: [true, "Invalid Power Code!"],
        unique: true,
    },
    
    killerCode: {
        type:String,
        required: [true, "Invalid Killer Code!"],
        unique: true,
    },

    description: {
        type:String,
        required: [true, "Invalid Description!"],
        unique: true,
    },

    powerImg: [
        {
            type:String,
        },
    ],
});

const KillerPower = mongoose.model ("KillerPower", killerPowerSchema);


module.exports = KillerPower;
const { Schema, model} = require('mongoose');



const PremiumSchema = new Schema({
    userId: {
        type: String,
        unique: true,
        trim: true,
    },
    keyActive: {
        type: String,
        unique: true,
    },
    createAt: { type: Date, default:  Date.now()}
})


module.exports = model("PremiumSchema", PremiumSchema)
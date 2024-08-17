const { Schema, model} = require('mongoose');



const KeySchema = new Schema({
    key: { type: String, unique: true},
    used: { type: Boolean, default: false},
    createAt: { type: Date, default:  Date.now()}
})


module.exports = model("KeySchema", KeySchema)
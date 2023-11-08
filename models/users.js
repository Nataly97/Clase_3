const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    lastname: String,
    email: {
        type: String,
        match: /[a-zA-Z1-9]/
    },
    password: String,
    dateRegistered: { type: Date, default: Date.now }, //Registra la fecha en que se crea el usuario
    active: Boolean
})

const User = mongoose.model('User', userSchema);

module.exports = User

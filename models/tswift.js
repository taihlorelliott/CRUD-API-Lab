const mongoose = require('mongoose');

//schema 
const tswiftSchema = mongoose.Schema({
    song: String,
    album: String,
    rating: Number,
})

//register model
const Tswift = mongoose.model('Tswift', tswiftSchema);

//export model

module.exports = Tswift
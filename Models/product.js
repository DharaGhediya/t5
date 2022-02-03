var mongoose = require('mongoose');

var movieSchema = mongoose.Schema({
    name:String,
    price:Number
})

module.exports = mongoose.model("movies",movieSchema)

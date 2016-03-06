//Require mongoose
var mongoose = require('mongoose');

//TODO:Configure connection URL ( only needs to happen once per app )
mongoose.connect('mongodb://127.0.0.1:27017/books');

//Create a database schema for our Post object, which will describe both it's data and it's behavior.
var bookSchema = mongoose.Schema({
    id: Number,
    name: String,
    author: String,
    description: String,
    authorblurb: String,
    price: Number,
    images: [{
        type: String
    }],
    reviews: [{
        stars: String,
        body: String,
        author: String,
        createdOn: Date
    }]
});

//Create a model object constructor that will have ODM functinality like .save()...
var bookModel = mongoose.model('books', bookSchema);

//Expose out a model as the module interface
module.exports = bookModel;
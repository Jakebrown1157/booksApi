const mongoose = require('mongoose')
const {Schema}= mongoose

const bookSchema = new Schema ({
    name: {type: String, required: true},
    description: String,
    year: Number,
    quantity: Number,
    imageUrl: String
})

const book = mongoose.model('book' , bookSchema)
module.exports = book
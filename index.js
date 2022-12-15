require('dotenv').config()

const express = require('express')

const PORT = process.env.PORT
const app = express()


//moddleware
app.use(express.json())


//routes
const booksController = require('./controllers/books-Controller.js')
app.use('/books', booksController)

//listen
app.listen(PORT, () => {
    console.log('listening on port' , PORT)
})
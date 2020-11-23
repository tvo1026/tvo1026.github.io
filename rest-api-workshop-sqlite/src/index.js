//onsole.log("Hello world")
// sample from https://www.youtube.com/watch?v=o3ka5fYysBM
let express = require('express')
let app = express()
let personRoute = require('./routes/person')
let customerRoute = require('./routes/customer')
let path = require('path')
let bodyParser = require('body-parser')
let db = require("./database.js")

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`)
    next() // Need to add next so that it calls the next app.use
})
app.use(personRoute)
app.use(customerRoute)
app.use(express.static('public'))

//Handler for 404 - resource not found
app.use((req, res, next) => {
    res.status(404).send('We think you are lost')
})

// Handler for ERROR 500
app.use((err, req, res, next) =>{
    console.error(err.stack)

    res.sendFile(path.join(__dirname, '../public/500.html'))
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.info(`Server has started on ${PORT}`)) // Back ticks so I can add a variable

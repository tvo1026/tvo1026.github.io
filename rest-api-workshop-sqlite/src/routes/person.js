let express = require('express')
let router = express.Router()

// QueryString => query property on the request object
// localhost:3000/person?name=bill
router.get('/person', (req, res) => {
    if(req.query.name){
        res.send(`You have requested a person ${req.query.name}`)
    }
    else{
        res.send('You have requested a person')
    }
})

// Params property on the request object
router.get('/person/:name', (req, res) => {
    // req.params.name
    res.send(`You have requested a person ${req.params.name}`)
})

// Generate an error to test handling
router.get('/error', (req, res) => {
   throw new Error('This is an error')
})

module.exports = router
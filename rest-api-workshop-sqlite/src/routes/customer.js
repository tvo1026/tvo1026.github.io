nplet express = require('express')
let router = express.Router()
let db = require('../database');

// Create a new customer
// POST localhost:3000/customer
router.post('/customer', (req, res) => {
    // now we have access to req.body due to body-parser (see index.js)
    if (!req.body) {
        return resizeBy.status(400).send('Request body is missing')
    }

    //    let user = {
    //        name: 'firstname lastname',
    //        email: 'email@gmail.com'
    //    }
    let customer = {
        name: req.body.name,
        email: req.body.email
    }

    var sql ='INSERT INTO customer (name, email) VALUES (?,?)'
    var params =[customer.name, customer.email]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": customer,
            "id" : this.lastID
        })
    });
    //res.status(500).json(err)

})

//GET
router.get('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter email')
    }
    let sql = "select * from customer where email = ?"
    console.log("req.query.email: " + req.query.email)
    let params = [req.query.email]
    db.get(sql, params, (err, row) => {
        if (err) {
          res.status(400).json({"error":err.message});
          return;
        }
        res.json({
            "message":"success",
            "data":row
        })
      });
})

//Update
router.put('/customer', (req, res) => {
    var data = {
        name: req.body.name,
        email: req.body.email
    }
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter email')
    }
    db.run(
        `UPDATE customer set 
           name = COALESCE(?,name) 
           WHERE email = ?`,
        [data.name, req.query.email],
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message: "success",
                data: data,
                changes: this.changes
            })
    });
})

//Delete
router.delete('/customer', (req, res) => {
    if (!req.query.email) {
        return res.status(400).send('Missing URL parameter email')
    }
    db.run(
        'DELETE FROM customer WHERE email = ?',
        req.query.email,
        function (err, result) {
            if (err){
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({"message":"deleted", changes: this.changes})
    });
})
module.exports = router
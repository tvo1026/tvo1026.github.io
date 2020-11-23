const express = require('express');
const app = express();

// Code here for how to set 'public' as the static folder for express
app.use(express.static('public'));
/*
app.get('/', function(request, response){
    response.sendFile('public/index.html');
});
*/
// Code here to have the app listen on port 8080....please provide a console.log message
app.listen(8080, function(){
    console.log("Started node app on 8080");
});

/*
let express = require('express')
let router = express.Router()
let db = require('../database');

// Create a new task
// POST localhost:<port>/task
router.post('/task', (req, res) => {
    // now we have access to req.body due to body-parser (see index.js)
    if (!req.body) {
        return resizeBy.status(400).send('Request body is missing')
    }

    let task = {
        name: req.body.taskName,
        dueDate: req.body.taskDueDate // Example 2020-11-24
    }
    
    var sql ='INSERT INTO tasklist (taskName, dueDate) VALUES (?,?)'
    var params =[task.name, task.dueDate]
    db.run(sql, params, function (err, result) {
        if (err){
            res.status(400).json({"error": err.message})
            return;
        }
        res.json({
            "message": "success",
            "data": task,
            "id" : this.lastID
        })
    });
    
})

//GET
router.get('/task/', (req, res) => {
    if (!req.query.id) {
        return res.status(400).send('Missing URL parameter id')
    }
    let sql = "select * from tasklist where id = ?"
    console.log("req.query.taskId: " + req.query.id)
    let params = [req.query.id] //Todo
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
router.put('/task', (req, res) => {
    console.log("PUT called")
    var data = {
        id : req.body.taskId,
        taskName: req.body.taskName//TODO
        
    }
    console.log("data.id:" + data.id + " name:" + data.taskName)
    if (!data.id) {
        return res.status(400).send('Missing URL parameter id')
    }
    db.run(
        `UPDATE tasklist set 
           taskName = ? 
           WHERE id = ?`,
        [data.taskName, data.id],
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
//TODO add entire DELETE method
router.delete('/task', (req, res) => {
    if (!req.query.taskId) {
        return res.status(400).send('Missing URL parameter taskId')
    }
    db.run(
        'DELETE FROM user WHERE taskId = ?',
        req.query.taskId,
        function (err, result) {
            if (err) {
                res.status(400).json({"error": res.message})
                return;
            }
            res.json({
                message:"success", 
                changes: this.changes
            })
        }
    )
})
module.exports = router
*/
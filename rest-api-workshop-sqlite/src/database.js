//https://developerhowto.com/2018/12/29/build-a-rest-api-with-node-js-and-express-js/

let sqlite3 = require('sqlite3').verbose()
let md5 = require('md5')

const DBSOURCE = "db.sqlite"

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQLite database.')
        db.run(`CREATE TABLE customer (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            CONSTRAINT email_unique UNIQUE (email)
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO customer (name, email) VALUES (?,?)'
                db.run(insert, ["Gary Smith","gary@example.com"])
                db.run(insert, ["Latesha Balbino","user@example.com"])
            }
        });  
    }
});
//db.run(insert, ["user","user@example.com",md5("user123456")]

module.exports = db

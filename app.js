const express = require('express');
const expressHandlebars = require('express-handlebars');
const dataFile = require('./public/data');
const bodyParser = require('body-parser');
const robots = require('./models/schema.js')
const app = express()
const mongoose = require('mongoose');
mongoose.createConnection('mongodb://localhost:27017/newdb').MongoClient;
mongoose.Promise = require('bluebird');






app.engine('handlebars', expressHandlebars());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static('public'));

app.get('/', function(req, res){
//for loop if value key is null, target same place and assign it to string "availble for hire" console.log(dataFile)
for (var i = 0; i < dataFile.users.length; i++) {
  if (dataFile.users[i].job === null){
        let userStatus = "looking for work";
        dataFile.users[i].job = "reboot me, i need work!";
        // document.querySelector('.job').style.color = "red";
  }
  var findDocuments = function(db, callback) {
    // Get the documents collection
    var collection = newdb.collection('robots');
    // Find some documents
    collection.find().toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs)
      callback(docs);
    });
  };
}
  res.render('home', dataFile)
});


app.get("/:user", function(req, res){
  let robot = req.params.user;
  for (var i = 0; i < dataFile.users.length; i++) {
    if(dataFile.users[i].username === robot){
    res.render('user', dataFile.users[i]);
    }
  }
});


app.listen(3000);
console.log("listening at 3000");

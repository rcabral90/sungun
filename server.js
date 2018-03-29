const express = require('express');
const json = require('./resources/mock_data.json')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://sungun:1burger@207.148.14.210:27017/";

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: json.data });
});

app.get('/api/muscle', (req, res) => {
	MongoClient.connect(url, function(err, db) {
  		if (err) console.log(err);
		var dbo = db.db("sungun");
		var data = dbo.collection('tblMuscles').find().toArray(function(err, items){
			res.send(items);
		});
	});
});

app.get('/api/excercise', (req, res) => {
	MongoClient.connect(url, function(err, db) {
  		if (err) console.log(err);
		var dbo = db.db("sungun");
		var data = dbo.collection('tblExcercise').find().toArray(function(err, items){
			res.send(items);
		});
	});
});

app.get('/api/excerciseLookup', (req, res) => {
	MongoClient.connect(url, function(err, db) {
  		if (err) console.log(err);
		var dbo = db.db("sungun");
		var data = dbo.collection('tblExcersiseLookup').find().toArray(function(err, items){
			res.send(items);
		});
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
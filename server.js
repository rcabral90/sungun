const express = require('express');
const json = require('./resources/mock_data.json')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://root@45.76.175.175:27017/";

const app = express();
const port = process.env.PORT || 5000;

app.get('/api/hello', (req, res) => {
  res.send({ express: json.data });
});

app.get('/api/getAllWorkouts', (req, res) => {
	MongoClient.connect(url, function(err, db) {
  		if (err) throw err;
		var dbo = db.db("SunGun");
		dbo.collection('Workouts').find().toArray(function(err, items){
			res.send({ express: items});
		});
	});
});

app.listen(port, () => console.log(`Listening on port ${port}`));
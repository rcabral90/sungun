const express = require('express');
const json = require('./resources/mock_data.json');
const app = express();
const port = process.env.PORT || 5000;


const { Muscle, Exercise } = require('./sequelize');

app.get('/api/hello', (req, res) => {
  res.send({ express: json.data });
});

app.get('/api/allMuscles', (req, res) => {
  Muscle.findAll().then(muscles => res.json(muscles))
});

app.get('/api/allExercises', (req, res) => {
  Exercise.findAll().then(excersize => res.json(excersize))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
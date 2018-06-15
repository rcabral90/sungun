const express = require('express');
const json = require('./resources/mock_data.json')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sungun', 'postgres', '1burger', {
  host: '207.148.14.210',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    timestamps: false
  }
});

const app = express();
const port = process.env.PORT || 5000;

const Muscles = sequelize.define('muscles', {
  muscleid: { type: Sequelize.INTEGER, primaryKey: true },
  muscle: Sequelize.TEXT
})

app.get('/api/hello', (req, res) => {
  res.send({ express: json.data });
});

app.get('/api/allMuscles', (req, res) => {
  Muscles.findAll().then(muscle => {
    res.send({ muscle })
  })
})

app.listen(port, () => console.log(`Listening on port ${port}`));
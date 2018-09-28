const Sequelize = require('sequelize');
const MuscleModel = require('./models/muscle');
const ExerciseModel = require('./models/exercise');

const sequelize = new Sequelize('sungun2', 'postgres', '1burger', {
    host: '207.148.14.210',
    dialect: 'postgres',
    define: {
      timestamps: false
    }
});

const Muscle = MuscleModel(sequelize, Sequelize);
const Exercise = ExerciseModel(sequelize, Sequelize);

module.exports = { Muscle, Exercise };
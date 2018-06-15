
const Sequelize = require('sequelize');
const sequelize = new Sequelize('sungun', 'postgres', '1burger', {
  host: '207.148.14.210',
  dialect: 'postgres',
  operatorsAliases: false,
  define: {
    timestamps: false
  }
});

module.exports = {
  Muscles: function(sequelize, DataTypes){
    return sequelize.define('muscles', {
        muscleid: { type: Sequelize.INTEGER, primaryKey: true },
        muscle: Sequelize.TEXT
      })
  }
}

module.exports = (sequelize, type) => {
    return sequelize.define('tblexercise', {
        exercise_id: { 
            type: type.INTEGER, 
            primaryKey: true 
        },
        name: type.STRING
    }, {
        freezeTableName: true,
    })
  }
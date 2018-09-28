
module.exports = (sequelize, type) => {
  return sequelize.define('tblmuscle', {
      muscle_id: { 
        type: type.INTEGER, 
        primaryKey: true 
      },
      name: type.STRING
    }, {
      freezeTableName: true,
    })
}
const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  config.db.options
)

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js");
  })
  .forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    console.log("model " + model)
    try{
    db[model.name] = model
    console.log("working")
    }catch(err){
    console.error(err)
    }
    })

    Object.keys(db).forEach(function (modelName){
      if('associate' in db[modelName]) {
        db[modelName].associate(db)
      }
    })
  
db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
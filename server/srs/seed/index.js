const { sequelize, Song, User } = require('./models')

sequelize.sync({force:true})// {force:true}
  .then(() => {

  })
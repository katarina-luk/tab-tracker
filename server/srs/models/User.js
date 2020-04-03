module.exports = (sequelize, DataTypes) => {
const User = sequelize.define('User', {
  email:{
    type:DataTypes.STRING(150),
    unique:true,
    allowNull:false
  },
      password:{
        type:DataTypes.STRING(150),
        unique:true,
        allowNull:false
      }})
    return User
}
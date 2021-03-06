const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config.js')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./passport')

require('./routes')(app)

sequelize.sync()// {force:true}
  .then(() => {
    app.listen(process.env.PORT || 8081)
    console.log(`Server started on port ${config.port}`)
  })

/* eslint-disable eol-last */

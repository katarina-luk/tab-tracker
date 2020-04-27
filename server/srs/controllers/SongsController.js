const {Song} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
 
      async index (req, res) {
        try {
          let songs = null
          const search = req.query.search
          if (search) {
            songs = await Song.findAll({
              where: {
                [Op.or]: [
                  'title', 'artist', 'genre', 'album'
                ].map(key => ({
                  [key]: {
                    [Op.like]: `%${search}%`
                  }
                }))
              }
            })
          } else {
            songs = await Song.findAll({
              limit: 10
            })
          }
          res.send(songs)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to fetch the songs'
          })
        }
      },

      async show (req, res) {
        try {
         // const song = await Song.findById(req.params.songId)
         const song = await Song.findOne({
          where: {
            id: req.params.songId
          }
      })//findOne({id:req.params.songId})
       // const song = await Song.findAll({where: {id:req.params.songId}})
        //const obj = JSON.stringify(song)
        //const obj =  Object.assign({}, song)
          res.send(song)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to show the songs'
          })
        }
      },
      async post (req, res) {
        try {
          const song = await Song.create(req.body)
          res.send(song)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the song'
          })
        }
      },
      async put (req, res) {
        try {
          const song = await Song.update(req.body, {
            where: {
              id: req.params.songId
            }
          })
          res.send(req.body)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to create the song'
          })
        }
      },

      async delete (req,res) {
        try {
          const {songId} = req.params
          const song = await Song.findOne({where:{id:songId}})
          await song.destroy()
          res.send(song)
        } catch (err) {
      res.status(500).send({
  error: 'Error of deleting'
})        }
      }
    }
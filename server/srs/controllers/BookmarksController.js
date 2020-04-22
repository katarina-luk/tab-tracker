const {Bookmark, Song, User} = require('../models')
const _ = require('lodash')


module.exports = {
  async index (req, res) {
    try {
      //const {userId} = req.body
      //const {songId} = req.query
      /*const where = {
        UserId: userId
      }
      if (songId) {
        where.SongId = songId
      }*/
      const bookmarks = await Bookmark.findAll({include:[{model:Song}]})
        .map(bookmark => bookmark.toJSON())
        .map(bookmark => _.extend(
          {},
          bookmark.Song,
          bookmark
          ))
      res.send(bookmarks)
    } catch (err) {
      res.status(500).send({
        error: 'an error has occured trying to fetch the bookmark'
      })
    }
  },


async post (req, res) {
  try {
    const {userId} = req.body
    const {songId} = req.body
    const bookmark = await Bookmark.findOne({
      where: {
        SongId: songId//,
       // UserId: userId
      }
    })
    if (bookmark) {
      return res.status(400).send({
        error: 'you already have this set as a bookmark'
      })
    }
    const newBookmark = await Bookmark.create({
      SongId: songId,
      UserId: userId
    })
    res.send(newBookmark)
  } catch (err) {
    console.log(err)
    res.status(500).send({
      error: 'an error has occured trying to create the bookmark'
    })
  }
},

      async delete (req, res) {
        try {
          const { bookmarkId } = req.params
          
             const bookmark = await Bookmark.findByPk(bookmarkId) 
            /* const bookmark = await Bookmark.findOne({
              where: {
                id: bookmarkId
              }
            }) */
          
            if (!bookmark) {
              return res.status(403).send({
                error: 'you do not have access to this bookmark'
              })
            }
          
            await bookmark.destroy()
            res.send(bookmark)
          } catch (err) {
            res.status(500).send({
              error: 'Error deleting all the songs'
            })
          }
          
          }
          
          
    }
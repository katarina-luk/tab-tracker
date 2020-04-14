const {Bookmark} = require('../models')

module.exports = {
 
  async index (req, res) {
    try {
        
        const {songId, userId} = req.query

        const bookmark = await Bookmark.findOne({
          where: {
              SongId: songId
          }
        })
        console.log('bookmark', bookmark)
        res.send(bookmark)

    }
    catch (err) {
        res.status(500).send({
            error: 'an error has occurred trying to fetch the songs'
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
          //const userId = req.user.id
          //const {bookmarkId} = req.params.bookmarkId
          const bookmark = await Bookmark.findOne({
            where: {
              id: req.params.bookmarkId//,
              //userId: req.user.id
            }
          })
          if (!bookmark) {
            return res.status(403).send({
              error: 'you do not have access to this bookmark'
            })
          }
          await bookmark.destroy()
          res.send({message:'Successful deleting'}, bookmark)
        } catch (err) {
          res.status(500).send({
            error: 'an error has occured trying to delete the bookmark'
          })
        }
      }
    }
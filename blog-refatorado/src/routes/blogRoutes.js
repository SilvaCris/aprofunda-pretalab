const express = require('express')
const blogController = require('../controllers/blogControllers')

const router = express.Router()

router.post('/texts', blogController.createText)
router.get('/texts', blogController.listTexts)
router.get('/text', blogController.listText)
router.patch('/text/:id', blogController.updatedText)
router.delete('/text/:id', blogController.deleteText)



module.exports = router
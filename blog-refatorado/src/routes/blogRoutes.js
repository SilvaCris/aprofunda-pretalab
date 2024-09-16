const express = require('express')
const blogController = require('../controllers/blogControllers')
const userController = require('../controllers/userController')
const router = express.Router()

router.post('/texts', blogController.createText)
router.get('/texts', blogController.listTexts)
router.get('/text', blogController.listText)
router.patch('/text/:id', blogController.updatedText)
router.delete('/text/:id', blogController.deleteText)

router.post('/users', userController.createUser)
router.get('/users', userController.listUsers)
router.delete('/user/:id', userController.deleteUsers)



module.exports = router
const express = require('express')
const users = require('../controller/userController')
const router = express.Router();

router.get('/todo', users.gettodo).post('/todo', users.posttodo)
router.delete('/:id', users.deletetodo)

module.exports = router


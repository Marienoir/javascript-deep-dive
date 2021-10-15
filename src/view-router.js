const express = require('express')
const router = express.Router()
const {index} = require("./controllers/UserController");

router.get('/', index);

module.exports = router;
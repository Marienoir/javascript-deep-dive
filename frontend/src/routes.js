const express = require('express')
const router = express.Router()
const {index, freeDate, setAvailability, scheduledAppointments} = require("./controllers/UserController");

router.get('/', index);
router.get('/free-date', freeDate);
router.get('/availability', setAvailability);
router.get('/appointments', scheduledAppointments);

module.exports = router;
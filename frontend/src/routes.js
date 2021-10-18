const express = require('express')
const router = express.Router()
const {index, freeDate, setAvailability, scheduledAppointments} = require("./controllers/UserController");
const {scheduleAppointment} = require("./controllers/AppointmentController")

router.get('/', index);
router.get('/free-date', freeDate);
router.get('/availability', setAvailability);
router.get('/appointments', scheduledAppointments);
router.get('/booking', scheduleAppointment)

module.exports = router;
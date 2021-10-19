const express = require('express')
const router = express.Router()
const {index, setAvailability, scheduledAppointments} = require("./controllers/UserController");
const {scheduleAppointment} = require("./controllers/AppointmentController")

router.get('/', index);
router.get('/availability', setAvailability);
router.get('/appointments', scheduledAppointments);
router.get('/booking', scheduleAppointment)

module.exports = router;
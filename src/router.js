const express = require('express')
const router = express.Router()
const {registerUser, setFreeDate, getAllScheduledAppointments} = require('./controllers/UserController')
const {bookAppointment} = require('./controllers/AppointmentController')


router.post('/user', registerUser);
router.post('/user/availability/:username', setFreeDate);
router.post('/appointment/:userAvailabilityId',bookAppointment);
router.get('/user/:userId/appointments', getAllScheduledAppointments)

module.exports = router;
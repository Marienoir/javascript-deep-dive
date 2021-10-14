const express = require('express')
const router = express.Router()
const {registerUser, setFreeDate, getAllScheduledAppointments} = require('./controllers/UserController')


router.post('/user', registerUser);
router.post('/user/availability/:username', setFreeDate);
router.get('/user/:userId/appointments', getAllScheduledAppointments)

module.exports = router;
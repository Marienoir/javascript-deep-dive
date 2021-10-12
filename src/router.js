const express = require('express')
const router = express.Router()
const {getTest, postTest} = require('./controllers/TestController')
const {registerUser, setFreeDate, getAllScheduledAppointments} = require('./controllers/UserController')


router.get('/test', getTest);
router.post('/test', postTest);
router.post('/user', registerUser);
router.post('/user/availability', setFreeDate);
router.get('/user/:userId/appointments', getAllScheduledAppointments)

module.exports = router;
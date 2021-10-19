const express = require("express");
const router = express.Router();
const {
    index,
    dashboard,
    setAvailability,
    scheduledAppointments,
} = require("./controllers/UserController");
const { scheduleAppointment } = require("./controllers/AppointmentController");

router.get("/", index);
router.get("/dashboard?username=username", dashboard);
router.get("/availability?username=username", setAvailability);
router.get("/appointments?user_id=userId", scheduledAppointments);
router.get("/booking", scheduleAppointment);

module.exports = router;

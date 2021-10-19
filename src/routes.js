const express = require("express");
const router = express.Router();
const {
    registerUser,
    setFreeDate,
    getAllScheduledAppointments,
    dashboard,
} = require("./controllers/UserController");
const { bookAppointment } = require("./controllers/AppointmentController");

router.post("/user/availability/:username", setFreeDate);
router.get("/user/dashboard/:username", dashboard);
router.post("/appointment/:userAvailabilityId", bookAppointment);
router.get("/user/:username/appointments", getAllScheduledAppointments);
router.post("/user", registerUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const ServiceContainer = require('./services')
const UserController = require('./controllers/UserController')
const UserControllerHandler = UserController(ServiceContainer)

const { bookAppointment } = require("./controllers/AppointmentController");

router.post(
    "/user/availability/:username",
    (req, res) =>
        UserControllerHandler.setFreeDate(req, res)
);
router.get(
    "/user/dashboard/:username",
    (req, res) =>
        UserControllerHandler.dashboard(req, res)
);
router.post("/appointment/:userAvailabilityId", bookAppointment);
router.get(
    "/user/:username/appointments",
    (req, res) =>
        UserControllerHandler.getAllScheduledAppointments(req, res)
);
router.post(
    "/user",
    (req, res) =>
        UserControllerHandler.registerUser(req, res)
);

module.exports = router;

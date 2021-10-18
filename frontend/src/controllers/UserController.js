const path = require("path");

const index = (req, res) => {
    res.render('/index');
}

const freeDate = (req, res) => {
    res.render('/free-date');
}

const setAvailability = (req, res) => {
    res.render('/availability');
}

const scheduledAppointments = (req, res) => {
    res.render('/appointments');
}

module.exports = {
    index,
    freeDate,
    setAvailability,
    scheduledAppointments
}
const index = (req, res) => {
    res.render('/index');
}

const setAvailability = (req, res) => {
    res.render('/availability');
}

const scheduledAppointments = (req, res) => {
    res.render('/appointments');
}

module.exports = {
    index,
    setAvailability,
    scheduledAppointments
}
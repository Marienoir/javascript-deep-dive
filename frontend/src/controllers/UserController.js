const index = (req, res) => {
    res.sendFile('/index.html');
}

const freeDate = (req, res) => {
    res.sendFile('/free-date.html');
}

const setAvailability = (req, res) => {
    res.sendFile('/availability.html');
}

const scheduledAppointments = (req, res) => {
    res.sendFile('/availability.html');
}

module.exports = {
    index,
    freeDate,
    setAvailability,
    scheduledAppointments
}
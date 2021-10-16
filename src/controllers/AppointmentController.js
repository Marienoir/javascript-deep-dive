const appointmentService = require('./../services/AppointmentService');

const bookAppointment = async (req, res) => {
    const {userAvailabilityId} = req.params;
    const name = req.body.name;
    const email = req.body.email;
    const reason = req.body.reason;

try {
    const response = await appointmentService.bookAppointment(userAvailabilityId,name,email,reason);
   return res.status(201).json({
    success: true,
    message: response
    })
} catch (e) {
    return res.status(401).json({
        success: false,
        message: e.message
    })
 }
}

 module.exports = { bookAppointment }
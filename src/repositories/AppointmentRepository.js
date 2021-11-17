const AppointmentModel = require("../models/AppointmentModel");

const AppointmentRepository = () => {
    const createAppointment = async (userId, userAvailabilityId, info) => {
        const {name, email, reason} = info;
        let newAppointment = await AppointmentModel.create({
            userId,
            userAvailabilityId,
            name,
            email,
            reason,
        });
    
        userAvailability.status = "booked";
        await userAvailability.save();
    
        if (!newAppointment) {
            throw new Error("Appointment not scheduled successfully");
        }
    
        return "Appointment booked successfully!!!";
    };
    
    return {
        createAppointment,
    };
};

module.exports = AppointmentRepository();

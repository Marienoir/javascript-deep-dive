const AppointmentModel = require("../models/AppointmentModel");

const AppointmentRepository = () => {
    const getUserScheduledAppointments = async (userId) => {
        const scheduledAppointments = await AppointmentModel.find({
            userId: userId,
        }).populate("userAvailabilityId", "date");

        return scheduledAppointments;
    };

    return {
        getUserScheduledAppointments,
    };
};

module.exports = AppointmentRepository();
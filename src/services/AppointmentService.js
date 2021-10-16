const UserAvailabilityModel = require("../models/UserAvailabilityModel");
const AppointmentModel = require("../models/AppointmentModel");

const bookAppointment = async (userAvailabilityId, info) => {
    const { name, email, reason } = info;

    const userAvailability = await UserAvailabilityModel.findOne({
        _id: userAvailabilityId,
        status: "pending",
    });

    if (!userAvailability) {
        throw new Error("This date isn't available for booking");
    }

    let newAppointment = new AppointmentModel({
        userAvailabilityId,
        name,
        email,
        reason,
    });

    userAvailability.status = 'booked';
    await userAvailability.save()

    if (!await newAppointment.save()) {
        throw new Error("Appointment not scheduled successfully");
    }
    return "Appointment set successfully";
};

module.exports = {
    bookAppointment,
};

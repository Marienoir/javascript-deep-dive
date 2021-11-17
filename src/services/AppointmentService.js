const UserRepository = require("../repositories/UserRepository");
const AppointmentRepository = require("../repositories/AppointmentRepository");
const AppointmentModel = require("../models/AppointmentModel");

const AppointmentService = () => {
    const bookAppointment = async (userAvailabilityId, info) => {
        const userAvailability = await UserRepository.getAllPendingAvailabilityById(
            userAvailabilityId
        );

        if (!userAvailability) {
            throw new Error("This user date isn't available for booking");
        }
        const { userId } = userAvailability;
        const {name, email, reason} = info;
    
        let newAppointment = await AppointmentModel.create({
            userId,
            userAvailabilityId,
            name,
            email,
            reason,
        });
    
        userAvailability.status = "booked";
    
        if (!newAppointment) {
            throw new Error("Appointment not scheduled successfully");
        }
        await userAvailability.save();
    
        return "Appointment booked successfully!!!";
    };

    return {
        bookAppointment,
    };
};

module.exports = AppointmentService;

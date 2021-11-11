const UserAvailabilityModel = require("../models/UserAvailabilityModel");
const AppointmentModel = require("../models/AppointmentModel");
const UserRepository = require("../repositories/UserRepository");
const AppointmentRepository = require("../repositories/AppointmentRepository");

const AppointmentService = () => {
  const bookAppointment = async (userAvailabilityId, info) => {
    const userAvailability = await UserRepository.getAllPendingAvailabilityById(
      userAvailabilityId
    );

    if (!userAvailability) {
      throw new Error("This user date isn't available for booking");
    }
    const { userId } = userAvailability;

    let newAppointment = await AppointmentRepository.createAppointment(
      userId,
      userAvailabilityId,
      info
    );

    return newAppointment;
  };

  return {
    bookAppointment,
  };
};

module.exports = AppointmentService;

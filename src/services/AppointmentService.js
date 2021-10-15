const UserAvailabilityModel = require("../models/UserAvailabilityModel");
const AppointmentModel = require("../models/AppointmentModel");

const bookAppointment = async (userAvailabilityId, info) => {
  const { name, email, reason } = info;

  const booking = await UserAvailabilityModel.findOne({
    userAvailabilityId: userAvailabilityId,
    status: "pending",
  });

  if (!booking) {
    throw new Error("This user is booked already");
  }

  let newAppointment = new AppointmentModel({
    userAvailabilityId,
    name,
    email,
    reason,
  });

  const bookedAppointment = await newAppointment.save();
  const status = "booked";

  if (bookedAppointment) {
    booking.status = status;
    await booking.save();
  }
  return "Appointment set successfully";
};

module.exports = {
  bookAppointment,
};

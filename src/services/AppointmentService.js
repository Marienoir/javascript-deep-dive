const UserAvailabilityModel = require("../models/UserAvailabilityModel");
const AppointmentModel = require("../models/AppointmentModel");

const bookAppointment = async (userAvailabilityId,name,email,reason) => {

    const user = await UserAvailabilityModel.findOne({userAvailabilityId: userAvailabilityId, status:"pending"});
    
    if (!user) {
        throw new Error('This user is booked already')
    }
    
    let newAppointment  = new AppointmentModel({
        name: name,
        email: email,
        reason:reason
    });
    
    const bookedAppointment = await newAppointment.save()

    const status = 'booked';

    if(bookedAppointment){
       user.status = status;
       const newUser =  await user.save()
    
    }
    return 'Appointment set successfully'

}

module.exports = {
    bookAppointment
}
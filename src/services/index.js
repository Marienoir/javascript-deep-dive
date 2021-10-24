const UserService = require('./UserService');
const AppointmentService = require('./AppointmentService');

const Index = () => {
    return {
        userService: UserService(),
        appointmentService: AppointmentService
    }
}

module.exports = Index
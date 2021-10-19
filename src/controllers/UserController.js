const { scheduledAppointments } = require("../services/AppointmentService");
const userService = require("../services/UserService");

const registerUser = async (req, res) => {
    try {
        const result = await userService.addUser(req.body);
        return res.status(201).json({
            success: true,
            message: result,
        });
    } catch (e) {
        return res.status(400).json({
            success: false,
            message: "Bad request",
        });
    }
};

const dashboard = async (req, res) => {
    try {
        const result = await userService.getAllPendingAppointments(req.params.username);
        res.status(200).json({
            success: true,
            result,
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
}

const setFreeDate = async (req, res) => {
    const username = req.params.username;
    const date = req.body.date;

    try {
        const response = await userService.setDate(username, date);
        return res.status(201).json({
            success: true,
            message: response,
        });
    } catch (e) {
        return res.status(401).json({
            success: false,
            message: e.message,
        });
    }
};

const getAllScheduledAppointments = async (req, res) => {
    try {
        const appointments = await scheduledAppointments(req.params);
        res.status(200).json({
            success: true,
            appointments,
        });
    } catch (error) {
        return res.status(401).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    registerUser,
    dashboard,
    setFreeDate,
    getAllScheduledAppointments,
};

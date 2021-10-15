const userService = require('../services/UserService')

const index = (req, res) => {
    res.sendFile('/index.html');
}

const registerUser = async (req, res) => {
    const result = await userService.addUser(req.body);
    return res.status(201).json({
        success: true,
        message: result
    })
    
}

const setFreeDate = async (req, res) => {
    const username = req.params.username;
    const date = req.body.date;

    try {
        const response = await userService.setDate(username, date);
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

const getAllScheduledAppointments = async (req, res) => {
    // To Dos
}

module.exports = {
    index,
    registerUser,
    setFreeDate,
    getAllScheduledAppointments
}
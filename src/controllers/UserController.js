const userService = require('../services/UserService')

const registerUser = async (req, res) => {
    const result = await userService.addUser(req.body);
    console.log(result)
    return res.status(201).json({
        success: true,
        message: result
    })
    
}

const setFreeDate = async (req, res) => {
    const response = await userService.setDate(req.body);
    console.log(response)
    return res.status(201).json({
        success:true,
        message:response
    })
    // To Dos
}

const getAllScheduledAppointments = async (req, res) => {
    // To Dos
}

module.exports = {
    registerUser,
    setFreeDate,
    getAllScheduledAppointments
}
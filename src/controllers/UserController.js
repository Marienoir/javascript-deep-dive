const UserController = (serviceContainer) => {
    const registerUser = async (req, res) => {
        try {
            const result = await serviceContainer.userService.addUser(req.body);
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
            const result = await serviceContainer.userService.getAllPendingAppointments(req.params.username);
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
            const response = await serviceContainer.userService.setDate(username, date);
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
            const appointments = await serviceContainer.appointmentService.scheduledAppointments(req.params);
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

    return {
        registerUser,
        dashboard,
        setFreeDate,
        getAllScheduledAppointments
    }
}

module.exports = UserController

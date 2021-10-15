const mongoose = require("mongoose")

const UserAvailabilitySchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    date: {
        type: Date
    },
    status: {
        type: String,
        enum: ['pending', 'booked'],
        default: 'pending'
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('UserAvailability', UserAvailabilitySchema)
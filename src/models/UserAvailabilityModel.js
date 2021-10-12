import mongoose from 'mongoose';

const UserAvailabilitySchema = new mongoose.Schema({
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
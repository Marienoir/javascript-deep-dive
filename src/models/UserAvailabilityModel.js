const mongoose = require("mongoose");

const UserAvailabilitySchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  userAvailabilityId: {
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
  },
  date: {
    type: Date,
  },
  status: {
    type: String,
    enum: ["pending", "booked"],
    default: "pending",
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("UserAvailability", UserAvailabilitySchema);

const mongoose = require('mongoose');

const bookingSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    date: { type: String, require: true },
    time: { type: String, require: true },
    status: { type: String, require: true },
    owner: [
        {type: Schema.Types.ObjectId, ref: 'Customer'}
    ],
    vehicle: [
        {type: Schema.Types.ObjectId, ref: 'Customer_Vehicle_Detail'}
    ]
});

module.exports = mongoose.model('Booking', bookingSchema);
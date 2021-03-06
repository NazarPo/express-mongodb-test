const mongoose = require('mongoose');
const MeetupSchema = mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now }
});

const MeetUp = mongoose.model('Meetup', MeetupSchema, 'meetups');

module.exports = MeetUp;

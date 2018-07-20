const Meetup = require('../models/MeetUp');

class MeetupController {
    find() { return Meetup.find() }
    create(guest) { return Meetup.create(guest) }
    findById(id) { return Meetup.findById(id) }
    removeById(id) { return Meetup.findByIdAndRemove(id) }
    updateById(id, body) { return Meetup.findByIdAndUpdate(id, body, {new : true}) }
}

module.exports = new MeetupController()
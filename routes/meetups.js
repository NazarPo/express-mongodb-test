const express = require('express');
const router = express.Router();
const Meetup = require('../models/MeetUp');

router.post('/meetups', (req, res) => {
    Meetup.create(req.body)
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}))
});

router.get('/meetups/:id', (req, res) => {
   Meetup.findById(req.params.id)
       .then(m => res.json(m))
       .catch(err => res.status(500).json({error: err}))
});

router.get('/meetups', (req, res) => {
    Meetup.find()
        .then(meetups => res.json(meetups))
        .catch(err => res.status(500).json({error: err}))
});

router.delete('/meetups/:id', (req, res) => {
    Meetup.findByIdAndRemove(req.params.id)
        .then(m => res.status(204).json('OK'))
        .catch(err => res.status(500).json({error: err}))
});

router.patch('/meetups/:id', (req, res) => {
    Meetup.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(m => res.json(m))
        .catch(err => res.status(500).json({error: err}))
});

module.exports = router;
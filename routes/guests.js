const express = require('express');
const router = express.Router();
const Guest = require('../models/Guest');

class GuestController {
    find() { return Guest.find() }
    create(guest) { return Guest.create(guest) }
}

let controller = new GuestController();

router.post('/', (req, res) => {
    controller.create(req.body)
        .then(d => res.json(d))
        .catch(err => res.status(500).json({error: err}))
});

router.get('/:id', (req, res) => {
    Guest.findById(req.params.id)
        .then(d => res.json(d))
        .catch(err => res.status(500).json({error: err}))
});

router.get('/', (req, res) => {
    controller.find()
        .then(documents => res.json(documents))
        .catch(err => res.status(500).json({error: err}))
});

router.delete('/:id', (req, res) => {
    Guest.findByIdAndRemove(req.params.id)
        .then(d => res.status(204).json('OK'))
        .catch(err => res.status(500).json({error: err}))
});

router.patch('/:id', (req, res) => {
    Guest.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .then(d => res.json(d))
        .catch(err => res.status(500).json({error: err}))
});

module.exports = router;
const express = require('express');

function restfulRouter(controller) {
    const router = express.Router();

    router.post('/', (req, res) => {
        controller.create(req.body)
            .then(d => res.json(d))
            .catch(err => res.status(500).json({error: err}))
    });

    router.get('/:id', (req, res) => {
        controller.findById(req.params.id)
            .then(d => res.json(d))
            .catch(err => res.status(500).json({error: err}))
    });

    router.get('/', (req, res) => {
        controller.find()
            .then(documents => res.json(documents))
            .catch(err => res.status(500).json({error: err}))
    });

    router.delete('/:id', (req, res) => {
        controller.removeById(req.params.id)
            .then(d => res.status(204).json('OK'))
            .catch(err => res.status(500).json({error: err}))
    });

    router.patch('/:id', (req, res) => {
        controller.updateById(req.params.id, req.body)
            .then(d => res.json(d))
            .catch(err => res.status(500).json({error: err}))
    });

    return router;
}

module.exports = restfulRouter;
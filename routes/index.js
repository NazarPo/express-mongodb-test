const express = require('express');
const router = express.Router();

router.post('/:say', (req, res) => {
    let say = req.params.say;
    let {first, last} = req.body;
    let message = `${say} ${first} ${last}!`;
    res.json({ message });
});

module.exports = router;
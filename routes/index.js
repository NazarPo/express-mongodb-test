const express = require('express');
const router = express.Router();

const restfulRouter = require('./restfulRouter');
const controllers = require('../controllers');

for(let path in controllers){
    router.use(`/${path}`, restfulRouter(controllers[path]))
}

module.exports = router;
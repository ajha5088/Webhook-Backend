const express = require('express');
const webHooks = require('./../controllers/webHookController');
const webHookController = require('./../controllers/webHookController');
const nocache = require('nocache');

const route = express.Router();


route.get('/:uuid',webHookController.getUUID);
route.post('/:uuid',webHookController.WebHooks);








module.exports = route;
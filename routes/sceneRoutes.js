const express = require('express');
const router = express.Router();
const controller = require('../controllers/sceneController');


router.get('/post', controller.addScene);
router.get('/get/:id', controller.getScenes);


module.exports = router;
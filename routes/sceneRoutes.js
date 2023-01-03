const express = require('express');
const router = express.Router();
const controller = require('../controllers/sceneController');


router.post('/post', controller.addScene);
router.get('/get/:id', controller.getScenes);


module.exports = router;
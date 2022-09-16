const express = require('express');
const router = express.Router();
router.use(express.static(__dirname))
const path = require('path');
const controller = require('../controller/imageController')

router.get('/', (req, res, next) =>{
    res.status(200).render(path.join(__dirname, '../views/index.html'));
});

router.get('/src/public/greek', controller.greekController);
router.get('/public/sideboard', controller.sideboardController);
router.get('/public/bikesResized', controller.bikesController);
router.get('/public/tarotResized', controller.tarotController);


module.exports = router;
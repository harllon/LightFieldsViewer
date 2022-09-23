const express = require('express');
const router = express.Router();
router.use(express.static(__dirname))
const path = require('path');
const controller = require('../controller/imageController')

router.get('/', (req, res, next) =>{
    res.status(200).render(path.join(__dirname, '../views/index.html'));
});

router.get('/src/public/datasets/greek', controller.greekController);
router.get('/src/public/datasets/sideboard', controller.sideboardController);
router.get('/src/public/datasets/bikesResized', controller.bikesController);
router.get('/src/public/datasets/tarotResized', controller.tarotController);
router.get('/src/public/datasets/stoneResized', controller.stoneController);
router.get('/src/public/datasets/dangerResized', controller.dangerController);
router.get('/src/public/datasets/fountainResized', controller.fountainController);
router.get('/src/public/datasets/labResized', controller.labController);
router.get('/src/public/datasets/airplane', controller.airplaneController);

module.exports = router;
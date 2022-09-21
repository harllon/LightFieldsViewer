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


module.exports = router;
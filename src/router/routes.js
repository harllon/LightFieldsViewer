const express = require('express');
const router = express.Router();
router.use(express.static(__dirname))
const path = require('path');
const controller = require('../controller/imageController')

router.get('/', (req, res, next) =>{
    res.status(200).render(path.join(__dirname, '../views/index.html'));
});


router.get('/src/public/datasets/demo/airplane', controller.airplaneController);


module.exports = router;
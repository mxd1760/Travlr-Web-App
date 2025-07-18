var express = require('express');
var router = express.Router();
const mainController = require("../controllers/main");

/* GET home page. */
router.get('/', mainController.index);
/* GET travel page */
router.get('/travel',mainController.travel);

router.get('/rooms', mainController.rooms)
router.get('/meals', mainController.meals)
router.get('/news',mainController.news)
router.get('/about',mainController.about)
router.get('/contact',mainController.contact)

module.exports = router;

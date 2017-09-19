var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations'); //dependencia criada com arquivo de controlador 'locations'//
var ctrlOthers = require('../controllers/others');

/* Location pages */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

/* Other pages */

router.get('/about', ctrlOthers.about);

module.exports = router;

const { indexController } = require('../controllers/index_controller');

const router = require('express').Router();

router.route('/')
.get(indexController.get);

module.exports = router;
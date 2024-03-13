const express = require("express");
const router = express.Router();
const inventoriesController = require('../controllers/inventories-controler');

/**
 * Get the list of inventories
 */
router.route('/').get(inventoriesController.index);

module.exports = router;
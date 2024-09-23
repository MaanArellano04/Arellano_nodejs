const express = require('express');
const router = express.Router();
const maan = require('../controller/maanController.js');
router.get('/', maan.main);
router.get('/About', maan.about);
router.get('/Store', maan.store);
router.get('/Contact', maan.contact);
router.get('/Cart', maan.cart);

module.exports = router;
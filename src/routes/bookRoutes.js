const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.post('/borrow', bookController.borrowBook);
router.post('/return/:id', bookController.returnBook);

module.exports = router;
const express = require('express');
const router = express.Router();

// Route to render the countdown
router.get('/', (req, res) => {
    res.render('countdown');
});

module.exports = router;
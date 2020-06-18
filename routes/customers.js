const express = require('express');
const router = express.Router();
const db = require('../db/conf');

/* GET customers listing. */
router.get('/', function(req, res, next) {
    db.query('SELECT * FROM customer', (error, result) => {
        if (error) {
            throw error;
        }
        res.send(result.rows);    
    });
});

module.exports = router;

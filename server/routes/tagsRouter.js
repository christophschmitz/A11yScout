const express = require('express');
const router = express.Router();
const Tag = require('../models/tag');

router.get('/', async (req, res) => {
    try {
        const tags = await Tag.find();
        res.json(tags);
    } catch (err) {
        console.error("Fehler beim Abrufen der Tags:", err);
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

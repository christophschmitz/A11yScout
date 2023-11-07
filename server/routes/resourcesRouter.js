// routes/resourcesRouter.js
const express = require('express');
const Resource = require('../models/resources');
const router = express.Router();

// GET Route für alle Ressourcen
router.get('/', (req, res) => {
    Resource.find()
        .then(resources => res.json(resources))
        .catch(err => res.status(500).json({ message: 'Fehler beim Abrufen der Ressourcen' }));
});

// Hier können Sie zusätzliche Routen für das Erstellen, Aktualisieren und Löschen von Ressourcen hinzufügen

module.exports = router;

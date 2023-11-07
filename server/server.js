// Umgebungsvariablen einlesen
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path'); // Fügen Sie diese Zeile hinzu, um das 'path' Modul zu importieren
const tagsRouter = require('./routes/tagsRouter');
const resourcesRouter = require('./routes/resourcesRouter'); // Importieren Sie den Ressourcen-Router, wenn Sie ihn erstellt haben

const app = express();

// Middleware
app.use(cors()); // CORS-Handling
app.use(express.json()); // Anfragekörper als JSON lesen

// Datenbankverbindung
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Datenbankverbindung erfolgreich aufgebaut'))
.catch(err => console.error('Fehler beim Verbinden mit der Datenbank:', err));

// Routen
app.use('/api/tags', tagsRouter); // Alle Tag-bezogenen Routen werden im tagsRouter behandelt
app.use('/api/resources', resourcesRouter); // Hiermit integrieren wir die Ressourcen-Routen

// Nach allen anderen Middleware und Routing
if (process.env.NODE_ENV === 'production') {
  // Express wird Produktions-Assets bereitstellen
  app.use(express.static('build'));

  // Express wird die index.html-Datei bereitstellen, wenn es die Route nicht erkennt
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// Starte den Server
const PORT = process.env.PORT || 5090;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

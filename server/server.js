// Umgebungsvariablen einlesen
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
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

app.get('/', (req, res) => {
  res.send('Hallo, das ist mein Server!');
});

// Routen
app.use('/api/tags', tagsRouter);  // Alle Tag-bezogenen Routen werden im tagsRouter behandelt
app.use('/api/resources', resourcesRouter);  // Hiermit integrieren wir die Ressourcen-Routen

// Starte den Server
const PORT = process.env.PORT || 5090;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});

// Laden Sie zuerst das dotenv-Paket
require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  // Ersetzen Sie die Credentials durch Umgebungsvariablen
  const dbURI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@a11yscout.dtjj0vp.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;

  try {
    await mongoose.connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB verbunden...');
  } catch (err) {
    console.error('Fehler beim Verbinden mit MongoDB:', err.message);
    // Beendet den Prozess mit einem Fehlercode
    process.exit(1);
  }
};

module.exports = connectDB;

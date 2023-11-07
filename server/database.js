const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://A11yScout:<5m0ruEFcSBqQHPHL>@a11yscout.dtjj0vp.mongodb.net/?retryWrites=true&w=majority', {
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


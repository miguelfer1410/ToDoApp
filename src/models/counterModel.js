const mongoose = require('mongoose');

// Esquema para manter o contador de IDs
const counterSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Nome do contador (para distinguir múltiplos contadores)
    seq: { type: Number, default: 0 }        // Sequência atual
});

const Counter = mongoose.model('Counter', counterSchema);

module.exports = Counter;

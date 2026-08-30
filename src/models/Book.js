const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    studentId: String,
    dueDate: Date,
    returnDate: Date,
    fine: { type: Number, default: 0 }
});

module.exports = mongoose.model('Book', bookSchema);
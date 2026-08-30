const Book = require('../models/Book');
const calculateFine = require('../utils/fineCalculator');

exports.borrowBook = async (req, res) => {
    try {
        const { title, studentId, dueDate } = req.body;
        const newBook = new Book({ title, studentId, dueDate });
        await newBook.save();
        res.status(201).json({ message: 'Book borrowed!', book: newBook });
    } catch (error) {
        res.status(500).json({ error: 'Failed to borrow book' });
    }
};

exports.returnBook = async (req, res) => {
    try {
        const { id } = req.params;
        const { returnDate } = req.body;
        
        const book = await Book.findById(id);
        if (!book) return res.status(404).json({ error: 'Book not found' });

        book.returnDate = returnDate;
        book.fine = calculateFine(book.dueDate, returnDate); // Calculate the fine!
        
        await book.save();
        res.json({ message: 'Book returned!', fine: `GHS ${book.fine}` });
    } catch (error) {
        res.status(500).json({ error: 'Failed to return book' });
    }
};
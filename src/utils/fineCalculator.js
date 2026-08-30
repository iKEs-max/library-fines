// Calculate fine: GHS 1.00 per day, rounded down.
function calculateFine(dueDate, returnDate) {
    const due = new Date(dueDate);
    const returned = new Date(returnDate);
    
    // If returned on or before due date, no fine
    if (returned <= due) return 0;
    
    // Calculate difference in days
    const diffTime = Math.abs(returned - due);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    
    return diffDays * 1.00; // 1 Cedi per day
}

module.exports = calculateFine;
const calculateFine = require('../src/utils/fineCalculator');

test('No fine if returned on due date', () => {
    const due = '2023-10-01';
    const returned = '2023-10-01';
    expect(calculateFine(due, returned)).toBe(0);
});

test('Fine is GHS 5 if returned 5 days late', () => {
    const due = '2023-10-01';
    const returned = '2023-10-06';
    expect(calculateFine(due, returned)).toBe(5);
});

test('No fine if returned early', () => {
    const due = '2023-10-05';
    const returned = '2023-10-01';
    expect(calculateFine(due, returned)).toBe(0);
});
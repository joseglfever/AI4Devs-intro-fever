// Core logic
const reverseString = (str) => {
    if (typeof str !== 'string') return '';
    return str.split('').reverse().join('');
};

// Test Suite
const testReverseString = () => {
    const tests = [
        { input: 'hello', expected: 'olleh' },
        { input: '12345', expected: '54321' },
        { input: '', expected: '' },
        { input: 'a', expected: 'a' },
        { input: 'Test! 🚀', expected: '🚀 !tseT' },
        { input: 12345, expected: '' } // Non-string test
    ];

    tests.forEach((test, index) => {
        const result = reverseString(test.input);
        const success = result === test.expected;
        console.log(
            `Test ${index + 1}: ${success ? '✅' : '❌'}\n`,
            `Input: "${test.input}"\n`,
            `Expected: "${test.expected}"\n`,
            `Received: "${result}"\n`
        );
    });
};

// UI Handling
document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('inputText');
    const button = document.getElementById('reverseBtn');
    const result = document.getElementById('result');

    const updateResult = (text, isError = false) => {
        result.textContent = text;
        result.className = `result${isError ? ' error' : ''}`;
    };

    const handleReverse = () => {
        const text = input.value.trim();
        if (!text) {
            updateResult('Please enter some text!', true);
            return;
        }
        updateResult(reverseString(text));
    };

    button.addEventListener('click', handleReverse);
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleReverse();
    });
});

// Uncomment to run tests
// testReverseString();

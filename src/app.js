// Minor change for CI test

function greet(name) {
    return `Hello, ${name}!`;
}

// No-op function for CI test
function noop() {
    // does nothing
}

module.exports = { greet };
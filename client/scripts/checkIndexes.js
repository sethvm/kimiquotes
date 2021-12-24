// document selectors
const indexRange = document.getElementById('indexRange');

// display update listeners
window.onload = renderIndexRange();

// send GET request to API
async function renderIndexRange() {
    const response = await fetch(`${window.location.href}quotes`);
    const quotes = await response.json();

    indexRange.textContent = ` (any value from 0 to ${quotes.length - 1})`;
}

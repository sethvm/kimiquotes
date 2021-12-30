// selectors
const siteOrigin = document.getElementById('siteOrigin');

// listeners
window.onload = () => {
    siteOrigin.innerText = `${window.location.origin}[endpoint]`;
}

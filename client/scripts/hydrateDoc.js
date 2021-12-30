// document selectors
const siteOrigin = document.getElementById('siteOrigin');

// interface update listeners
window.onload = () => {
    siteOrigin.innerText = `${window.location.origin}[endpoint]`;
}

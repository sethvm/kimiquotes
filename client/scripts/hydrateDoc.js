// document selectors
const siteOrigin = document.getElementsByClassName('siteOrigin');

// interface update listeners
window.onload = () => {
    siteOrigin.innerText = `${window.location.origin}`;
}

// Fetch the external SVG file and inject it into the page
fetch('./images/icons.html')
  .then((response) => response.text())
  .then((data) => {
    // Inject the SVG symbols into the icon-placeholder div
    document.getElementById('icon-placeholder').innerHTML = data;
  })
  .catch((error) => console.error('Error loading icons:', error));

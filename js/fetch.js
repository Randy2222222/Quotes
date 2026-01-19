function updateHeaders() {
    fetch('path/to/your/textfile.txt')
        .then(response => response.text())
        .then(data => {
            const lines = data.split('\n');
            if (lines.length >= 2) {
                document.querySelector('h1').textContent = lines[0];
                document.querySelector('h3').textContent = lines[1];
            }
        })
        .catch(error => console.error('Error fetching the text file:', error));
}

// Call the function once to update headers
updateHeaders();

// Optionally, set an interval to update daily
setInterval(updateHeaders, 24 * 60 * 60 * 1000); // 24 hours in milliseconds

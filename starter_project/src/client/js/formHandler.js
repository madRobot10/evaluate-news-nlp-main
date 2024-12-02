import { checkForName } from './nameChecker.js';

const serverURL = 'http://localhost:8001/api';

const handleSubmit = async (event) => {
    event.preventDefault();

    const textInput = document.getElementById('text').value.trim();
    const resultsDiv = document.getElementById('results');

    if (!textInput) {
        alert('Please enter text for analysis.');
        return;
    }

    checkForName(textInput);

    resultsDiv.innerHTML = '<p>Loading...</p>';

    try {
        const response = await fetch(serverURL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: textInput }),
        });

        if (!response.ok) throw new Error('Failed to fetch results.');

        const data = await response.json();
        displayResults(data);
    } catch (error) {
        console.error('Error:', error);
        resultsDiv.innerHTML = '<p class="error">An error occurred. Please try again.</p>';
    }
};

const displayResults = (data) => {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    if (data.documents && data.documents.length > 0) {
        data.documents.forEach((doc) => {
            const resultItem = document.createElement('div');
            resultItem.className = 'result-item';
            resultItem.innerHTML = `
                <h3>${doc.title || 'No Title Available'}</h3>
                <p><strong>Author:</strong> ${doc.author || 'Unknown'}</p>
                <p><strong>URL:</strong> <a href="${doc.url}" target="_blank">${doc.url}</a></p>
                <p>${doc.text || 'No Content Available'}</p>
            `;
            resultsDiv.appendChild(resultItem);
        });
    } else {
        resultsDiv.innerHTML = '<p>No results found.</p>';
    }
};

export { handleSubmit };

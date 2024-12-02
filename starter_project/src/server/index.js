const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

// Use `node-fetch` in CommonJS
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const app = express();
app.use(cors());
app.use(bodyParser.json());

const API_KEY = process.env.API_KEY;
const API_URL = process.env.API_URL;

app.post('/api', async (req, res) => {
    const query = req.body.text; // Assuming the client sends the query in the `text` field

    try {
        // Construct the API request URL
        const url = `${API_URL}?apikey=${API_KEY}&q=${encodeURIComponent(query)}&format=json`;

        // Send request to Twingly API
        const response = await fetch(url, { method: 'GET' });
        const data = await response.json();

        // Respond with the API response
        res.send(data);
    } catch (error) {
        console.error('Error fetching data from Twingly API:', error);
        res.status(500).send({ error: 'Failed to fetch data from API' });
    }
});

// Start the server
const PORT = process.env.PORT || 8001; // Use 8001 if 8000 is busy

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


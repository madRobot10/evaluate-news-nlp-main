
# Evaluate News NLP

A simple tool to analyze and evaluate text using Natural Language Processing (NLP). This project demonstrates frontend and backend integration, modern web development practices, and using external APIs for advanced processing.

## Features
- **Dynamic Text Analysis:** Analyze text with a backend NLP API and display results on a clean UI.
- **Modern Development Tools:** Built with Webpack, Sass, and service workers for efficient development and deployment.
- **NLP Integration:** Leverages MeaningCloud or Aylien API for NLP tasks like sentiment analysis.

---

## Getting Started
### Requirements
- [Node.js](https://nodejs.org/) (v16 or later)
- npm (Node Package Manager)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd evaluate-news-nlp-main/starter_project
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run build-dev
   ```

4. Open your browser and go to:
   ```
   http://localhost:8080
   ```

---

## Setting Up the API

This project uses MeaningCloud (or Aylien) API for NLP. Follow these steps to configure it:

### 1. Get Your API Key
- Sign up for an API key:
  - [MeaningCloud API](https://www.meaningcloud.com/developer/sentiment-analysis)
  - [Aylien API](https://developer.aylien.com/signup)

### 2. Configure API Key
1. Install `dotenv` to manage environment variables:
   ```bash
   npm install dotenv
   ```

2. Create a `.env` file in the root directory:
   ```env
   API_KEY=your_api_key_here
   ```

3. Update `.gitignore` to exclude `.env`:
   ```gitignore
   .env
   ```

4. Configure the server to use the key:
   Add this at the top of `src/server/index.js`:
   ```javascript
   const dotenv = require('dotenv');
   dotenv.config();
   const API_KEY = process.env.API_KEY;
   ```

---

## Project Structure
```
starter_project/
├── src/
│   ├── client/
│   │   ├── js/           # JavaScript files
│   │   ├── styles/       # CSS styles
│   │   ├── views/        # HTML files
│   ├── server/           # Express server
├── webpack.dev.js         # Webpack config for development
├── webpack.prod.js        # Webpack config for production
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
```

---

## Building and Running
1. For **development**:
   ```bash
   npm run build-dev
   ```
2. For **production**:
   ```bash
   npm run build-prod
   npm start
   ```

---

## Additional Features
- **Dynamic Content:** Fetch and display analysis results dynamically on the page.
- **Error Handling:** Properly handle server and API errors.
- **Service Workers:** Offline support with caching (optional step for deployment).

---

## Deployment
Consider deploying the app using:
- [Netlify](https://www.netlify.com/) (frontend hosting)
- [Heroku](https://www.heroku.com/) (backend hosting)

Simply build the production version (`npm run build-prod`) and follow the platform’s deployment instructions.

---

## Credits
This project is inspired by Udacity's lessons on modern web development and NLP concepts.

---


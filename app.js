import express from 'express'; // Import the Express framework
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const app = express(); // Create an Express application

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React build folder
app.use(express.static(path.join(dirname, './build')));

// Serve the React app for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(dirname, './public', 'index.html'));
});

// Sync Sequelize models and start the server
(async () => {
  const PORT = process.env.PORT || 4000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})();

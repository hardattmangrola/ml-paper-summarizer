const express = require('express');
const app = express();
const PORT = 3000;

// Fix fetch in CommonJS
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

app.use(express.static('public'));
app.use(express.json());

app.post('/summarize', async (req, res) => {
  const { title } = req.body;
  const searchUrl = `http://export.arxiv.org/api/query?search_query=all:${encodeURIComponent(title)}&max_results=1`;

  try {
    const response = await fetch(searchUrl);
    const xml = await response.text();

    // Extract abstract/summary from the XML response
    const match = xml.match(/<summary>([\s\S]*?)<\/summary>/);
    const abstract = match ? match[1].replace(/\n/g, ' ').trim() : 'Abstract not found.';

    // Return the full abstract
    res.json({ summary: abstract });
  } catch (error) {
    console.error(error);
    res.status(500).json({ summary: "Error fetching summary." });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});

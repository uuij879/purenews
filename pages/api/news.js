import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Calculate 7 days ago for dynamic "from" date
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const {
      q = 'tesla',
      from = sevenDaysAgo.toISOString().split('T')[0],
      sortBy = 'publishedAt',
      page = 1,
      pageSize = 70,
    } = req.query;

    const apiKey="1edeccdbb5a44cbb8c099157524dc8d1";
    if (!apiKey) {
      return res.status(500).json({ error: 'NewsAPI key is not configured.' });
    }

    if (!q) {
      return res.status(400).json({ error: 'Query parameter "q" is required.' });
    }

    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: { q, from, sortBy, apiKey, page, pageSize, language: 'en' },
    });

    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      if (error.response.status === 426) {
        res.status(426).json({ message: 'Upgrade required. Please check your API subscription or protocol.' });
      } else {
        res.status(error.response.status).json({ message: error.response.data.message || 'Error from NewsAPI' });
      }
    } else if (error.request) {
      res.status(500).json({ message: 'No response from the news service.' });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

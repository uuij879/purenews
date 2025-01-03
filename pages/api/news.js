import axios from 'axios';

export default async function handler(req, res) {
  try {
    const { q = 'tesla', from = '2024-12-02', sortBy = 'publishedAt' } = req.query;
    const apiKey = '252fee2129af4d539cbecef5bafcd325';
    if (!q) {
      return res.status(400).json({ error: 'Query parameter "q" is required.' });
    }

    const response = await axios.get('https://newsapi.org/v2/everything', {
      params: { q, from, sortBy, apiKey,  pageSize: 50,  language: 'en',  },
    });

    res.status(200).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json({ message: error.response.data.message });
    } else if (error.request) {
      res.status(500).json({ message: 'No response from the news service.' });
    } else {
      res.status(500).json({ message: error.message });
    }
  }
}

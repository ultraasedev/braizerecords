// pages/api/news.js
import connectToDatabase from '../../lib/mongodb';
import NewsItem from '../../models/NewsItem';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      try {
        const newsItems = await NewsItem.find({});
        res.status(200).json(newsItems);
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    case 'POST':
      try {
        const newNewsItem = new NewsItem(req.body);
        await newNewsItem.save();
        res.status(201).json({ success: true, data: newNewsItem });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
      break;
  }
}

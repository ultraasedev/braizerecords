import mongoose from 'mongoose';

const NewsItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: String, required: true },
  likesCount: { type: Number, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
});

export default mongoose.models.NewsItem || mongoose.model('NewsItem', NewsItemSchema);
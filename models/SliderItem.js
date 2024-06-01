// models/SliderItem.js
import mongoose from 'mongoose';

const SliderItemSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  buttonTypeTitle: { type: String, required: true },
  buttonActionTitle: { type: String, required: true },
  buttonActionIcon: { type: String, required: true },
  buttonActionLink: { type: String, required: true },
});

export default mongoose.models.SliderItem || mongoose.model('SliderItem', SliderItemSchema);
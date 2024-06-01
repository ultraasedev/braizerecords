import connectToDatabase from '../../lib/mongodb';
import mongoose from 'mongoose';

const ApplyFormSchema = new mongoose.Schema({
  artistName: { type: String, required: true },
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  instagramLink: { type: String, required: true },
  youtubeLink: { type: String, required: true },
  spotifyDeezerLink: { type: String, required: true },
  audioFile: { type: String, required: true },
  bio: { type: String, required: true },
}, { timestamps: true });

const ApplyForm = mongoose.models.ApplyForm || mongoose.model('ApplyForm', ApplyFormSchema);

export default async function handler(req, res) {
  await connectToDatabase();

  if (req.method === 'POST') {
    try {
      const ApplyForm = new ApplyForm(req.body);
      await ApplyForm.save();
      res.status(201).json({ success: true, data: ApplyForm });
    } catch (error) {
      res.status(400).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}

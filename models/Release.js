import mongoose from 'mongoose';

const ReleaseSchema = new mongoose.Schema({
  type: { type: String, required: true },
  coverImage: { type: String, required: true },
  artistName: { type: String, required: true },
  title: { type: String, required: true },
  streamLinks: {
    deezer: String,
    spotify: String,
    applemusic: String,
    youtube: String,
    other: String,
  },
});

export default mongoose.models.Release || mongoose.model('Release', ReleaseSchema);

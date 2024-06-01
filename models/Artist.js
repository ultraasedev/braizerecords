// models/Artist.js
import mongoose from 'mongoose';

const ArtistSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  genreMusical: { type: String, required: true },
  ville: { type: String, required: true },
  link: { type: String, required: true },
  imageSrc: { type: String, required: true },
  categories: { type: [String], required: true },
  socialLinks: {
    facebook: String,
    twitter: String,
    instagram: String,
    youtube: String,
    spotify: String,
    soundcloud: String,
  },
});

export default mongoose.models.Artist || mongoose.model('Artist', ArtistSchema);

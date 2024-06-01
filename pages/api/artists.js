
import connectToDatabase from '../../lib/mongodb';
import Artist from '../../models/Artist';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const artists = await Artist.find({});
      res.status(200).json(artists);
      break;
    case 'POST':
      const newArtist = new Artist(req.body);
      await newArtist.save();
      res.status(201).json(newArtist);
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}

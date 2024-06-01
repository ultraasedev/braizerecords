
import connectToDatabase from '../../lib/mongodb';
import Release from '../../models/Release';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      const Releases = await Release.find({});
      res.status(200).json(Releases);
      break;
    case 'POST':
      const newRelease = new Release(req.body);
      await newRelease.save();
      res.status(201).json(newRelease);
      break;
    default:
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}

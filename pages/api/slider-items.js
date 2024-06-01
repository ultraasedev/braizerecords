import connectToDatabase from '../../lib/mongodb';
import SliderItem from '../../models/SliderItem';

export default async function handler(req, res) {
  await connectToDatabase();

  switch (req.method) {
    case 'GET':
      try {
        const sliderItems = await SliderItem.find({});
        res.status(200).json(sliderItems);
      } catch (error) {
        res.status(500).json({ success: false, message: error.message });
      }
      break;
    case 'POST':
      try {
        const newSliderItem = new SliderItem(req.body);
        await newSliderItem.save();
        res.status(201).json({ success: true, data: newSliderItem });
      } catch (error) {
        res.status(400).json({ success: false, message: error.message });
      }
      break;
    default:
      res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
      break;
  }
}

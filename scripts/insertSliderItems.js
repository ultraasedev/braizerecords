const mongoose = require('mongoose');
const slugify = require('slugify');

const MONGODB_URI = 'mongodb+srv://abdidaspro:ToMTuJZcTx4flwWP@cluster0.cj0mkem.mongodb.net/braizerecords?retryWrites=true&w=majority&appName=Cluster0';

// Définir le schéma pour les articles de diaporama
const SliderItemSchema = new mongoose.Schema({
  title: String,
  date: Date,
  description: String,
  category: String,
  imageUrl: String,
  slug: { type: String, required: true, unique: true },
  buttonTypeTitle: String,
  buttonActionTitle: String,
  buttonActionIcon: String,
  buttonActionLink: String,
});

const SliderItem = mongoose.model('SliderItem', SliderItemSchema);

// Connexion à MongoDB et insertion des données
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    const sliderItems = [
      {
        title: "Lashka - Burn Out",
        date: "2024-04-15",
        description: "Apres la tournée des Zenith en 2023, Lashka reviens avec son nouveau single, un titre engage ou il denonce le dure monde du travail...",
        category: "Nouveau Single",
        imageUrl: "/slide_01.png",
        buttonTypeTitle: "Nouveau Single",
        buttonActionTitle: "Ecouter Maintenant",
        buttonActionIcon: "fa-solid fa-circle-play",
        buttonActionLink: "/",
      },
      {
        title: "Shakaoui - Olympia Nantes",
        date: "2024-04-20",
        description: "Apres la tournée des Zenith en 2023, Shakaoui reviens avec de nouvelles dates partout en France dont au Zenith de Nantes le 15.03.26 ...",
        category: "Nouvelle Date",
        imageUrl: "/slide_02.png",
        buttonTypeTitle: "Nouvelle Date",
        buttonActionTitle: "Reserver Maintenant",
        buttonActionIcon: "fa-solid fa-ticket",
        buttonActionLink: "/",
      },
      {
        title: "Makadam - Fly Air",
        date: "2024-04-25",
        description: "Etoile Montante du rap US sur la scene Francaise, c'est apres le succes de Maskaoff et Feu que Makadam debute l'annee 2024 avec le titre explosif Fly Air...",
        category: "Nouveau Single",
        imageUrl: "/slide_03.png",
        buttonTypeTitle: "Nouveau Single",
        buttonActionTitle: "Ecouter Maintenant",
        buttonActionIcon: "fa-solid fa-circle-play",
        buttonActionLink: "/",
      },
      {
        title: "Nephi - Seul",
        date: "2024-04-30",
        description: "Etoile Montante du rap US sur la scene Francaise, c'est apres le succes de Maskaoff et Feu que Makadam debute l'annee 2024 avec le titre explosif Fly Air...",
        category: "Nouveau Single",
        imageUrl: "/slide_05.png",
        buttonTypeTitle: "Nouveau Single",
        buttonActionTitle: "Ecouter Maintenant",
        buttonActionIcon: "fa-solid fa-circle-play",
        buttonActionLink: "/",
      },
      {
        title: "Underground Fest",
        date: "2024-05-05",
        description: "Etoile Montante du rap US sur la scene Francaise, c'est apres le succes de Maskaoff et Feu que Makadam debute l'annee 2024 avec le titre explosif Fly Air...",
        category: "Evenements",
        imageUrl: "/slide_04.png",
        buttonTypeTitle: "Evenements",
        buttonActionTitle: "Ecouter Maintenant",
        buttonActionIcon: "fa-solid fa-circle-play",
        buttonActionLink: "/",
      },
    ];

    // Ajouter les slugs et convertir les dates en objets Date
    sliderItems.forEach(item => {
      item.slug = slugify(item.title, { lower: true, strict: true });
      item.date = new Date(item.date); // Convertir la date en objet Date
    });

    try {
      await SliderItem.insertMany(sliderItems);
      console.log('Slider items inserted successfully');
    } catch (error) {
      console.error('Error inserting slider items:', error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

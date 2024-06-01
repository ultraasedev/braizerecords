const mongoose = require('mongoose');
const slugify = require('slugify');

const MONGODB_URI = 'mongodb+srv://abdidaspro:ToMTuJZcTx4flwWP@cluster0.cj0mkem.mongodb.net/braizerecords?retryWrites=true&w=majority&appName=Cluster0';

// Définir le schéma pour les articles de news
const NewsItemSchema = new mongoose.Schema({
  title: String,
  date: Date,
  likesCount: Number,
  category: String,
  imageUrl: String,
  slug: { type: String, required: true, unique: true },
});

const NewsItem = mongoose.model('NewsItem', NewsItemSchema);

// Connexion à MongoDB et insertion des données
mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    const newsItems = [
      {
        title: "Nouveau single de Booba intitulé 'Panthéon'",
        date: "2024-04-15",
        likesCount: 102,
        category: "Actualité musicale",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Jul annonce une tournée nationale 'La Machine'",
        date: "2024-04-20",
        likesCount: 64,
        category: "Concerts",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Ninho dévoile la tracklist de son prochain album 'M.I.L.S 3'",
        date: "2024-04-25",
        likesCount: 89,
        category: "Sortie d'album",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Maître Gims rejoint la saison 2 de 'The Voice Kids'",
        date: "2024-04-30",
        likesCount: 43,
        category: "Télévision",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Orelsan tease un nouveau clip pour 'Tout va bien'",
        date: "2024-05-05",
        likesCount: 78,
        category: "Clips vidéos",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Nekfeu remporte le prix du 'Meilleur artiste masculin' aux Victoires de la Musique",
        date: "2024-05-10",
        likesCount: 95,
        category: "Récompenses",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Lomepal annonce une collaboration avec Christine and the Queens pour son prochain album",
        date: "2024-05-15",
        likesCount: 57,
        category: "Collaborations",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Soprano organise un concert caritatif au profit des sans-abris",
        date: "2024-05-20",
        likesCount: 82,
        category: "Actions solidaires",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Dadju révèle le titre de son prochain single 'Amour et Dérision'",
        date: "2024-05-25",
        likesCount: 69,
        category: "Sortie de single",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Kaaris lance sa propre marque de vêtements '93Empire'",
        date: "2024-05-30",
        likesCount: 37,
        category: "Mode",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Alonzo annonce une pause dans sa carrière musicale pour se consacrer à sa famille",
        date: "2024-06-05",
        likesCount: 52,
        category: "Annonce personnelle",
        imageUrl: "/slide_01.png",
      },
      {
        title: "Gradur prévoit une collaboration avec Drake pour son prochain album 'Zone 59'",
        date: "2024-06-10",
        likesCount: 81,
        category: "Projets futurs",
        imageUrl: "/slide_01.png",
      },
    ];

    // Ajouter les slugs et convertir les dates en objets Date
    newsItems.forEach(item => {
      item.slug = slugify(item.title, { lower: true, strict: true });
      item.date = new Date(item.date); // Convertir la date en objet Date
    });

    try {
      await NewsItem.insertMany(newsItems);
      console.log('News items inserted successfully');
    } catch (error) {
      console.error('Error inserting news items:', error);
    } finally {
      mongoose.connection.close();
    }
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

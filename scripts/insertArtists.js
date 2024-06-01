const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://abdidaspro:ToMTuJZcTx4flwWP@cluster0.cj0mkem.mongodb.net/braizerecords?retryWrites=true&w=majority&appName=Cluster0";

const ArtistSchema = new mongoose.Schema({
    nom: String,
    genreMusical: String,
    ville: String,
    link: String,
    imageSrc: String,
    categories: [String],
    socialLinks: {
      facebook: String,
      twitter: String,
      instagram: String,
      youtube: String,
      spotify: String,
      soundcloud: String,
    },
  });
  
  const Artist = mongoose.model('Artist', ArtistSchema);
  
  mongoose.connect(MONGODB_URI)
    .then(async () => {
      console.log('Connected to MongoDB');
  
      const artists = [
        {
          nom: "Toska",
          genreMusical: "Rap / Trap",
          ville: "Nantes",
          link: "/",
          imageSrc: "/artsec/1.png",
          categories: ["tous", "360"],
          socialLinks: {
            facebook: "https://www.facebook.com/toskaofficial",
            twitter: "https://twitter.com/toskaofficial",
            instagram: "https://www.instagram.com/toskaofficial",
            youtube: "https://www.youtube.com/toskaofficial",
            spotify: "https://open.spotify.com/artist/toskaofficial",
            soundcloud: "https://soundcloud.com/toskaofficial"
          }
        },
        {
          nom: "Shino",
          genreMusical: "Jersey",
          ville: "Lyon",
          link: "/",
          imageSrc: "/artsec/2.png",
          categories: ["management"],
          socialLinks: {
            facebook: "https://www.facebook.com/toskaofficial",
            twitter: "https://twitter.com/toskaofficial",
            instagram: "https://www.instagram.com/toskaofficial",
            youtube: "https://www.youtube.com/toskaofficial",
            spotify: "https://open.spotify.com/artist/toskaofficial",
            soundcloud: "https://soundcloud.com/toskaofficial"
          }
        },
        {
          nom: "Bokira",
          genreMusical: "Pop Urbaines",
          ville: "Marseille",
          link: "/",
          imageSrc: "/artsec/3.png",
          categories: ["distribution"],
          socialLinks: {
            facebook: "https://www.facebook.com/toskaofficial",
            twitter: "https://twitter.com/toskaofficial",
            instagram: "https://www.instagram.com/toskaofficial",
            youtube: "https://www.youtube.com/toskaofficial",
            spotify: "https://open.spotify.com/artist/toskaofficial",
            soundcloud: "https://soundcloud.com/toskaofficial"
          }
        },
        {
          nom: "Akimbo",
          genreMusical: "Rap",
          ville: "Bordeaux",
          link: "/",
          imageSrc: "/artsec/4.png",
          categories: ["licence"],
          socialLinks: {
            facebook: "https://www.facebook.com/toskaofficial",
            twitter: "https://twitter.com/toskaofficial",
            instagram: "https://www.instagram.com/toskaofficial",
            youtube: "https://www.youtube.com/toskaofficial",
            spotify: "https://open.spotify.com/artist/toskaofficial",
            soundcloud: "https://soundcloud.com/toskaofficial"
          }
        },
        {
          nom: "Nephi",
          genreMusical: "RnB",
          ville: "Saint-Brieuc",
          link: "/",
          imageSrc: "/artsec/5.png",
          categories: ["booking", "management"],
          socialLinks: {
            facebook: "https://www.facebook.com/toskaofficial",
            twitter: "https://twitter.com/toskaofficial",
            instagram: "https://www.instagram.com/toskaofficial",
            youtube: "https://www.youtube.com/toskaofficial",
            spotify: "https://open.spotify.com/artist/toskaofficial",
            soundcloud: "https://soundcloud.com/toskaofficial"
          }
        },
        {
          nom: "Chacko",
          genreMusical: "Shatta",
          ville: "Strasbourg",
          link: "/",
          imageSrc: "/artsec/6.png",
          categories: ["360", "management"],
          socialLinks: {
            facebook: "https://www.facebook.com/toskaofficial",
            twitter: "https://twitter.com/toskaofficial",
            instagram: "https://www.instagram.com/toskaofficial",
            youtube: "https://www.youtube.com/toskaofficial",
            spotify: "https://open.spotify.com/artist/toskaofficial",
            soundcloud: "https://soundcloud.com/toskaofficial"
          }
        }
      ];
  
      try {
        await Artist.insertMany(artists);
        console.log('Artists inserted successfully');
      } catch (error) {
        console.error('Error inserting artists:', error);
      } finally {
        mongoose.connection.close();
      }
    })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error);
    });
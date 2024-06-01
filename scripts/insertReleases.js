const mongoose = require('mongoose');

const MONGODB_URI = "mongodb+srv://abdidaspro:ToMTuJZcTx4flwWP@cluster0.cj0mkem.mongodb.net/braizerecords?retryWrites=true&w=majority&appName=Cluster0";

const ReleaseSchema = new mongoose.Schema({
    type: String,
    coverImage: String,
    artistName: String,
    title: String,
    streamLinks: {
      deezer: String,
      spotify: String,
      applemusic: String,
      youtube: String,
      other: String,
    },
});
  
const Release = mongoose.model('Release', ReleaseSchema);

mongoose.connect(MONGODB_URI)
  .then(async () => {
    console.log('Connected to MongoDB');

    const releases = [
        {
          type: 'single',
          coverImage: '/realesesec/rel_01.png',
          artistName: 'Nephi 019',
          title: 'Seul',
          streamLinks: {
            deezer: 'https://deezer.com',
            spotify: 'https://spotify.com',
            applemusic: 'https://music.apple.com',
            youtube: 'https://youtube.com',
            other: 'https://google.com',
          },
        },
        {
          type: 'ep',
          coverImage: '/realesesec/rel_02.png',
          artistName: 'Nephi 019',
          title: 'Mia',
          streamLinks: {
            deezer: 'https://deezer.com',
            spotify: 'https://spotify.com',
            applemusic: 'https://music.apple.com',
            youtube: 'https://youtube.com',
            other: 'https://google.com',
          },
        },
        {
          type: 'single',
          coverImage: '/realesesec/rel_03.png',
          artistName: 'Nephi 019',
          title: 'Hotel Room',
          streamLinks: {
            deezer: 'https://deezer.com',
            spotify: 'https://spotify.com',
            applemusic: 'https://music.apple.com',
            youtube: 'https://youtube.com',
            other: 'https://google.com',
          },
        },
        {
          type: 'single',
          coverImage: '/realesesec/rel_04.png',
          artistName: 'RMD',
          title: 'Mauve',
          streamLinks: {
            deezer: 'https://deezer.com',
            spotify: 'https://spotify.com',
            applemusic: 'https://music.apple.com',
            youtube: 'https://youtube.com',
            other: 'https://google.com',
          },
        },
        {
          type: 'single',
          coverImage: '/realesesec/rel_05.png',
          artistName: 'RMD',
          title: 'Par Là',
          streamLinks: {
            deezer: 'https://deezer.com',
            spotify: 'https://spotify.com',
            applemusic: 'https://music.apple.com',
            youtube: 'https://youtube.com',
            other: 'https://google.com',
          },
        },
      ];


      try {
        await Release.insertMany(releases);
        console.log('Releases inserted successfully');
      } catch (error) {
        console.error('Error inserting releases:', error);
      } finally {
        mongoose.connection.close();
      }
    })
    .catch(error => {
      console.error('Error connecting to MongoDB:', error);
    });

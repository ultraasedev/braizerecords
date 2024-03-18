"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSpotify, FaSoundcloud } from "react-icons/fa";

interface ArtisteGallery {
  id: number;
  nom: string;
  genreMusical: string;
  ville: string;
  link: string;
  imageSrc: string;
  categories: string[];
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    youtube?: string;
    spotify?: string;
    soundcloud?: string;
  };
}

const artistes: ArtisteGallery[] = [
  {
    id: 1,
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
      soundcloud: "https://soundcloud.com/toskaofficial",
    },
    
  },
  {
    id: 2,
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
      soundcloud: "https://soundcloud.com/toskaofficial",
    },
  },
  {
    id: 3,
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
      soundcloud: "https://soundcloud.com/toskaofficial",
    },
  },
  {
    id: 4,
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
      soundcloud: "https://soundcloud.com/toskaofficial",
    },
  },
  {
    id: 5,
    nom: "Nephi",
    genreMusical: "RnB",
    ville: "Saint-Brieuc",
    link: "/",
    imageSrc: "/artsec/5.png",
    categories: ["booking","management"],
    socialLinks: {
      facebook: "https://www.facebook.com/toskaofficial",
      twitter: "https://twitter.com/toskaofficial",
      instagram: "https://www.instagram.com/toskaofficial",
      youtube: "https://www.youtube.com/toskaofficial",
      spotify: "https://open.spotify.com/artist/toskaofficial",
      soundcloud: "https://soundcloud.com/toskaofficial",
    },
  },
  {
    id: 6,
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
      soundcloud: "https://soundcloud.com/toskaofficial",
    },
  },
  // Add other artists and their social links here
];

const categories = ["all", "360", "management", "distribution", "licence", "booking"];

const ArtGallery: React.FC = () => {
  const [categorieActive, setCategorieActive] = useState<string>("all");

  const artistesFiltres = categorieActive === "all" ? artistes : artistes.filter((artiste) => artiste.categories.includes(categorieActive));


    return (
      <section className="relative h-[900px] w-full bg-black text-white" id="art_section">
      <div className="bg-black text-white">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold">NOS ARTISTES</h1>
          <p className="mt-2">Découvre la liste de nos artistes et l accompagnement qu on leur propose.</p>
          <div className="flex justify-center my-4">
            {categories.map((categorie) => (
              <button
                key={categorie}
                onClick={() => setCategorieActive(categorie)}
                className={`mx-2 text-sm font-semibold ${categorieActive === categorie ? "text-red-500" : "text-gray-400"}`}
              >
                {categorie.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 p-6 justify-items-center">
        {artistesFiltres.map((artiste) => (
          <Link href={artiste.link} key={artiste.link}>
            <div className="flex flex-col items-center w-300">
              <div className="relative w-full h-700 rounded-lg overflow-hidden">
                <Image
                  src={artiste.imageSrc}
                  alt={artiste.nom}
                  width={400}
                  height="900"
                  className="rounded-lg"
                />
                <div className="absolute left-0 bottom-0 flex items-center p-4 bg-black bg-opacity-75 rounded-r-lg" >
                  {artiste.socialLinks.facebook && (
                    <Link href={artiste.socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="mr-2 text-red-500">
                      <FaFacebook className="text-white hover:text-red-500" />
                    </Link>
                  )}
                  {artiste.socialLinks.twitter && (
                    <Link href={artiste.socialLinks.twitter} target="_blank" rel="noopener noreferrer" className="mr-2 text-red-500">
                      <FaTwitter className="text-white hover:text-red-500"/>
                    </Link>
                  )}
                  {artiste.socialLinks.instagram && (
                    <Link href={artiste.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="mr-2 text-red-500">
                      <FaInstagram className="text-white hover:text-red-500"/>
                    </Link>
                  )}
                  {artiste.socialLinks.youtube && (
                    <Link href={artiste.socialLinks.youtube} target="_blank" rel="noopener noreferrer" className="mr-2 text-red-500">
                      <FaYoutube className="text-white hover:text-red-500"/>
                    </Link>
                  )}
                  {artiste.socialLinks.spotify && (
                    <Link href={artiste.socialLinks.spotify} target="_blank" rel="noopener noreferrer" className="mr-2 text-red-500">
                      <FaSpotify className="text-white hover:text-red-500"/>
                    </Link>
                  )}
                  {artiste.socialLinks.soundcloud && (
                    <Link href={artiste.socialLinks.soundcloud} target="_blank" rel="noopener noreferrer" className="text-red-500">
                      <FaSoundcloud className="text-white hover:text-red-500" />
                    </Link>
                  )}
                </div>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-bold">{artiste.nom}</h3>
                <p className="text-xs text-[#8f1e1e] font-semibold">{`${artiste.genreMusical.toUpperCase()}`}</p>
                <p className="text-xs font-medium">{artiste.ville}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ArtGallery;


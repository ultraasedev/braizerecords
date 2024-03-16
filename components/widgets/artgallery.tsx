"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ArtisteGallery {
  id: number;
  nom: string;
  genreMusical: string;
  ville: string;
  image: string;
  categories: string;

  social_link_1: string;
  social_link_1_icon: string;
  social_link_2: string;
  social_link_2_icon: string;
  social_link_3: string;
  social_link_3_icon: string;
  social_link_4: string;
  social_link_4_icon: string;
  social_link_5: string;
  social_link_5_icon: string;
  social_link_6: string;
  social_link_6_icon: string;
}
const artistes: ArtisteProps[] = [
  {
    id: 1,
    nom: "Toska",
    genreMusical: "Rap / Trap",
    ville: "Nantes",
    link: "/",
    imageSrc: "/artsec/1.png",
    categories: ["tous", "360"],
  },
  {
    id: 2,
    nom: "Shino",
    genreMusical: "Jersey",
    ville: "Lyon",
    link: "/",
    imageSrc: "/artsec/2.png",
    categories: ["management"],
  },
  {
    id: 3,
    nom: "Bokira",
    genreMusical: "Pop Urbaines",
    ville: "Marseille",
    link: "/",
    imageSrc: "/artsec/3.png",
    categories: ["distribution"],
  },
  {
    id: 4,
    nom: "Akimbo",
    genreMusical: "Rap",
    ville: "Bordeaux",
    link: "/",
    imageSrc: "/artsec/4.png",
    categories: ["licence"],
  },
  {
    id: 5,
    nom: "Floria",
    genreMusical: "Pop Urbaines",
    ville: "Nantes",
    link: "/",
    imageSrc: "/artsec/5.png",
    categories: ["booking"],
  },
  {
    id: 6,
    nom: "Chacko",
    genreMusical: "Shatta",
    ville: "Strasbourg",
    link: "/",
    imageSrc: "/artsec/6.png",
    categories: ["360", "management"],
  },
  // Ajoutez d autres artistes ici
];

const categories = [
  "all",
  "360",
  "management",
  "distribution",
  "licence",
  "booking",
];

const ArtGallery: React.FC = () => {
  const [categorieActive, setCategorieActive] = useState<string>("all");

  const artistesFiltres =
    categorieActive === "all"
      ? artistes
      : artistes.filter((artiste) =>
          artiste.categories.includes(categorieActive)
        );

  return (
    <section
      className="relative h-[1200px] w-full bg-black text-white"
      id="art_section"
    >
      <div className="bg-black text-white">
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold">NOS ARTISTES</h1>
          <p className="mt-2">Decouvre la liste de nos artistes et l accompagnement qu ont leurs propose .</p>
          <div className="flex justify-center my-4">
            {categories.map((categorie) => (
              <button
                key={categorie}
                onClick={() => setCategorieActive(categorie)}
                className={`mx-2 text-sm font-semibold ${
                  categorieActive === categorie
                    ? "text-red-500"
                    : "text-gray-400"
                }`}
              >
                {categorie.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-[175px] p-6 justify-items-center">
          {artistesFiltres.map((artiste) => (
            <Link href={artiste.link} key={artiste.link}>
              <div key={artiste.id} className="h-[300px] w-[250px] rounded-lg ">
                <div className="w-full h-full relative">
                  <Image
                    src={artiste.imageSrc}
                    alt={artiste.nom}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <div className="mt-6 text-center ">
                  <h3 className="text-xl font-bold">{artiste.nom}</h3>
                  <p className="text-xs text-[#8f1e1e] font-semibold">{`${artiste.genreMusical.toUpperCase()}`}</p>
                  <p className="text-xs  font-medium">{artiste.ville}</p>
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

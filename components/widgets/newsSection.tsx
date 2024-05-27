"use client";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { FaRegCommentAlt, FaRegCalendarAlt } from 'react-icons/fa';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  commentsCount: number;
  category: string;
  imageUrl: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Nouveau single de Booba intitulé 'Panthéon'",
    date: "15 Avril 2024",
    commentsCount: 102,
    category: "Actualité musicale",
    imageUrl: "/slide_01.png",
  },
  {
    id: 2,
    title: "Jul annonce une tournée nationale 'La Machine'",
    date: "20 Avril 2024",
    commentsCount: 64,
    category: "Concerts",
    imageUrl: "/slide_01.png",
  },
  {
    id: 3,
    title: "Ninho dévoile la tracklist de son prochain album 'M.I.L.S 3'",
    date: "25 Avril 2024",
    commentsCount: 89,
    category: "Sortie d'album",
    imageUrl: "/slide_01.png",
  },
  {
    id: 4,
    title: "Maître Gims rejoint la saison 2 de 'The Voice Kids'",
    date: "30 Avril 2024",
    commentsCount: 43,
    category: "Télévision",
    imageUrl: "/slide_01.png",
  },
  {
    id: 5,
    title: "Orelsan tease un nouveau clip pour 'Tout va bien'",
    date: "5 Mai 2024",
    commentsCount: 78,
    category: "Clips vidéos",
    imageUrl: "/slide_01.png",

  },
  {
    id: 6,
    title: "Nekfeu remporte le prix du 'Meilleur artiste masculin' aux Victoires de la Musique",
    date: "10 Mai 2024",
    commentsCount: 95,
    category: "Récompenses",
    imageUrl: "/slide_01.png",
  },
  {
    id: 7,
    title: "Lomepal annonce une collaboration avec Christine and the Queens pour son prochain album",
    date: "15 Mai 2024",
    commentsCount: 57,
    category: "Collaborations",
    imageUrl: "/slide_01.png",
  },
  {
    id: 8,
    title: "Soprano organise un concert caritatif au profit des sans-abris",
    date: "20 Mai 2024",
    commentsCount: 82,
    category: "Actions solidaires",
    imageUrl: "/slide_01.png",
  },
  {
    id: 9,
    title: "Dadju révèle le titre de son prochain single 'Amour et Dérision'",
    date: "25 Mai 2024",
    commentsCount: 69,
    category: "Sortie de single",
    imageUrl: "/slide_01.png",
  },
  {
    id: 10,
    title: "Kaaris lance sa propre marque de vêtements '93Empire'",
    date: "30 Mai 2024",
    commentsCount: 37,
    category: "Mode",
    imageUrl: "/slide_01.png",
  },
  {
    id: 11,
    title: "Alonzo annonce une pause dans sa carrière musicale pour se consacrer à sa famille",
    date: "5 Juin 2024",
    commentsCount: 52,
    category: "Annonce personnelle",
    imageUrl: "/slide_01.png",
  },
  {
    id: 12,
    title: "Gradur prévoit une collaboration avec Drake pour son prochain album 'Zone 59'",
    date: "10 Juin 2024",
    commentsCount: 81,
    category: "Projets futurs",
    imageUrl: "/slide_01.png",
  },
];


const NewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const [prevTranslate, setPrevTranslate] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if (!isUserInteracting) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current === newsData.length - 4 ? 0 : current + 1));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isUserInteracting]);

  useEffect(() => {
    setCurrentTranslate(-activeIndex * 100 / 4);
    setPrevTranslate(-activeIndex * 100 / 4);
  }, [activeIndex]);

  const handlePrevClick = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? newsData.length - 4 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setActiveIndex(prevIndex => (prevIndex === newsData.length - 4 ? 0 : prevIndex + 1));
  };

  const touchStart = (event: React.TouchEvent) => {
    setIsDragging(true);
    setIsUserInteracting(true);
    setStartPos(event.touches[0].clientX);
    document.body.style.userSelect = 'none'; // Désactive la sélection de texte
  };

  const touchMove = (event: React.TouchEvent) => {
    if (isDragging) {
      const currentPosition = event.touches[0].clientX;
      const newTranslate = prevTranslate + ((currentPosition - startPos) / containerRef.current!.offsetWidth) * 100;
      setCurrentTranslate(newTranslate);
    }
  };

  const touchEnd = () => {
    setIsDragging(false);
    document.body.style.userSelect = ''; // Réactive la sélection de texte
    setIsUserInteracting(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -25) {
      handleNextClick();
    } else if (movedBy > 25) {
      handlePrevClick();
    } else {
      setCurrentTranslate(prevTranslate);
    }
  };

  const mouseStart = (event: React.MouseEvent) => {
    setIsDragging(true);
    setIsUserInteracting(true);
    setStartPos(event.clientX);
    document.body.style.userSelect = 'none'; // Désactive la sélection de texte
  };

  const mouseMove = (event: React.MouseEvent) => {
    if (isDragging) {
      const currentPosition = event.clientX;
      const newTranslate = prevTranslate + ((currentPosition - startPos) / containerRef.current!.offsetWidth) * 100;
      setCurrentTranslate(newTranslate);
    }
  };

  const mouseEnd = () => {
    setIsDragging(false);
    document.body.style.userSelect = ''; // Réactive la sélection de texte
    setIsUserInteracting(false);
    const movedBy = currentTranslate - prevTranslate;
    if (movedBy < -25) {
      handleNextClick();
    } else if (movedBy > 25) {
      handlePrevClick();
    } else {
      setCurrentTranslate(prevTranslate);
    }
  };


  return (
    <section className="w-full mx-auto px-4 pb-10 md:pb-20 lg:pb-20 pt-10 bg-black" id="news">
      <div className="text-center py-8 mb-2">
        <h1 className="text-4xl font-semibold uppercase relative">
          Nos Dernieres <span className="text-red-500 font-black relative inline-block">
            NEWS
            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
              <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
            </svg>
          </span>
        </h1>
        <p className="mt-2 text-lg text-white font-semibold">
          Découvre toutes les nouveautés de notre label et de nos artistes.
        </p>
      </div>
      <div className="relative overflow-hidden" ref={containerRef}>
        <div className="flex transition-transform duration-1000" style={{ transform: `translateX(${currentTranslate}%)` }}>
          {newsData.map((news, index) => (
            <div key={index} className="min-w-[50%] md:min-w-[30%] lg:min-w-[30%] p-4">
              <div className="bg-[#0f0f0f] rounded-lg overflow-hidden shadow-md hover:shadow-xl">
                <Image src={news.imageUrl} alt={news.title} width={500} height={300} className="rounded-t-lg" />
                <div className="p-4">
                  <h3 className="text-lg text-red-500 truncate">{news.category}</h3>
                  <p className="font-semibold text-lg text-white line-clamp-2">{news.title}</p>
                  <div className="flex items-center text-md text-white space-x-2 mt-2">
                    <FaRegCalendarAlt />
                    <p>{news.date}</p>
                    <FaRegCommentAlt />
                    <p>{news.commentsCount}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-red-500 h-10 w-10 flex justify-center items-center rounded-full shadow-md ml-2" onClick={handlePrevClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-red-500 h-10 w-10 flex justify-center items-center rounded-full shadow-md mr-2" onClick={handleNextClick}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default NewsSection;
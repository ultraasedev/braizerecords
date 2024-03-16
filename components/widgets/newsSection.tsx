"use client";
import { useState , useEffect} from "react";
import Image from 'next/image';

interface NewsItem  {
  id: number;
  title: string;
  date: string;
  commentsCount: number;
  category: string;
  imageUrl: string;
};
const newsData: NewsItem[] = [
    {
      id: 1,
      title: 'TITRE ARTICLE',
      date: '2 SEP 2023',
      commentsCount: 0,
      category: 'ACTULABEL',
      imageUrl: '/slide_01.png',
    },
    {
        id: 2,
        title: 'TITRE ARTICLE',
        date: '2 SEP 2023',
        commentsCount: 0,
        category: 'ACTULABEL',
        imageUrl: '/slide_01.png',
      },
      {
        id: 3,
        title: 'TITRE ARTICLE',
        date: '3 SEP 2023',
        commentsCount: 5,
        category: 'ACTULABEL',
        imageUrl: '/slide_01.png',
      },
      {
        id: 4,
        title: 'TITRE ARTICLE',
        date: '4 SEP 2023',
        commentsCount: 0,
        category: 'ACTULABEL',
        imageUrl: '/slide_01.png',
      },
      {
        id: 5,
        title: 'TITRE ARTICLE',
        date: '5 SEP 2023',
        commentsCount: 0,
        category: 'ACTULABEL',
        imageUrl: '/slide_01.png',
      },
      {
        id: 6,
        title: 'TITRE ARTICLE',
        date: '6 SEP 2023',
        commentsCount: 0,
        category: 'ACTULABEL',
        imageUrl: '/slide_01.png',
      },
    // ... Deux autres objets NewsItem
  ];
  
  const NewsSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current === newsData.length - 1 ? 0 : current + 1));
      }, 30000);
      return () => clearInterval(interval);
    }, []);
  
    return (
        <section className=" h-[700px] w-full mx-auto px-4  bg-black" id="news">
          <div className="text-center py-8 mb-2">
          <h1 className="text-4xl font-bold">NEWS</h1>
          <p className="mt-2">Decouvre toutes les entendues de notre Prestations Labels & Services ainsi que nos differents Poles d activites .</p>
          </div>
        <div className=" relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Affiche 4 articles à la fois */}
          {newsData.slice(activeIndex, activeIndex + 4).map((news) => (
            <div key={news.id} className="flex flex-col items-center mt-[30px] space-y-4">
              <Image src={news.imageUrl} alt={news.title} width={500} height={300} className="rounded-lg" />
              <h3 className="text-lg text-red-500">{news.category}</h3>
              <p className="font-bold">{news.title}</p>
              <p>{news.date} • {news.commentsCount} Commentaires</p>
            </div>
          ))}
        </div>
        <div className="relative bottom-0 left-1/2 transform -translate-x-1/2 pb-4 align-center text-center mt-20 ml-[500px]">
          {/* Les cercles de navigation */}
          <div className="flex">
            {newsData.map((_, index) => (
              <span
                key={index}
                className={`h-4 w-4 mx-1 rounded-full ${index === activeIndex ? 'bg-red-500' : 'bg-gray-300'}`}
                onClick={() => setActiveIndex(index)}
              ></span>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default NewsSection;
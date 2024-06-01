"use client";
import { useState, useEffect, useRef } from "react";
import Image from 'next/image';
import { FaRegCommentAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { format } from 'date-fns';

interface NewsItem {
  _id: string;
  title: string;
  date: Date;
  likesCount: number;
  category: string;
  imageUrl: string;
  slug: string;
}

const NewsSection: React.FC = () => {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollInterval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      const response = await fetch('../../api/news');
      const data = await response.json();
      // Convertir les dates de chaîne en objets Date
      const formattedData = data.map((item: NewsItem) => ({
        ...item,
        date: new Date(item.date),
      }));
      setNewsData(formattedData);
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const startScrolling = () => {
      scrollInterval.current = setInterval(() => {
        setCurrentTranslate((prev) => {
          const newTranslate = prev - 100 / newsData.length;
          return newTranslate <= -100 ? 0 : newTranslate;
        });
      }, 3000); // change slide every 3 seconds
    };

    if (newsData.length > 0) {
      startScrolling();
    }

    return () => {
      if (scrollInterval.current) clearInterval(scrollInterval.current);
    };
  }, [newsData]);

  const handlePrevClick = () => {
    setCurrentTranslate((prev) => {
      const newTranslate = prev + 100 / newsData.length;
      return newTranslate > 0 ? -100 + 100 / newsData.length : newTranslate;
    });
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  const handleNextClick = () => {
    setCurrentTranslate((prev) => {
      const newTranslate = prev - 100 / newsData.length;
      return newTranslate <= -100 ? 0 : newTranslate;
    });
    if (scrollInterval.current) clearInterval(scrollInterval.current);
  };

  return (
    <section className="w-full mx-auto px-4 pb-10 md:pb-20 lg:pb-20 pt-10 bg-black" id="news">
      <div className="text-center py-8 mb-2">
        <h1 className="text-4xl font-semibold uppercase relative">
          Nos Dernières <span className="text-red-500 font-black relative inline-block">
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
            <div key={news._id} className="min-w-[100%] md:min-w-[50%] lg:min-w-[30%] p-4">
              <div className="bg-[#0f0f0f] rounded-lg overflow-hidden shadow-md transition-all duration-200">
                <Image src={news.imageUrl} alt={news.title} width={500} height={300} className="rounded-t-lg w-full" />
                <div className="p-4">
                  <h3 className="text-lg text-red-500 truncate">{news.category}</h3>
                  <p className="font-semibold text-lg text-white line-clamp-2">{news.title}</p>
                  <div className="flex items-center text-md text-white space-x-2 mt-2">
                    <FaRegCalendarAlt />
                    <p>{format(new Date(news.date), 'dd MMM yyyy')}</p>
                    <FaRegCommentAlt />
                    <p>{news.likesCount}</p>
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

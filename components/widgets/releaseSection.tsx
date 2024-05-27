'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaSpotify, FaApple, FaYoutube , FaNapster } from 'react-icons/fa';

interface CardData {
  type: string;
  coverImage: string;
  artistName: string;
  title: string;
}

const cardData: CardData[] = [
  { type: 'single', coverImage: '/realesesec/rel_01.png', artistName: 'Nephi 019', title: 'Seul' },
  { type: 'ep', coverImage: '/realesesec/rel_02.png', artistName: 'Nephi 019', title: 'Mia' },
  { type: 'single', coverImage: '/realesesec/rel_03.png', artistName: 'Nephi 019', title: 'Hotel Room' },
  { type: 'single', coverImage: '/realesesec/rel_04.png', artistName: 'RMD', title: 'Mauve' },
  { type: 'single', coverImage: '/realesesec/rel_05.png', artistName: 'RMD', title: 'Par Là' },
  // Add more card data as needed
];

const ReleaseSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filterCards = (filter: string) => {
    setActiveFilter(filter);
  };

  const filteredCards = activeFilter === 'all' ? cardData : cardData.filter(card => card.type === activeFilter);

  return (
    <section className="bg-black py-5 px-4 text-center">
        <div className="text-center py-8">
        <h1 className="text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-semibold uppercase">
          DERNIERES <span className="mx-1 text-red-500 font-black text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-4xl relative inline-block stroke-current">
            SORTIES
            <svg className="absolute -bottom-0.5 w-full max-h-1.5" viewBox="0 0 55 5" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none">
            <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" stroke-width="2"></path>
        </svg>
            </span></h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg text-white font-semibold">Decouvre notre discographie , nos dernieres realisations et clip .</p>
          <div className="flex flex-wrap justify-center my-4 mt-5 mb-6">
        <span
          className={`mx-2 uppercase cursor-pointer text-lg sm:text-lg md:text-lg lg:text-lg font-semibold transition-all duration-200 hover:italic opacity-55 hover:opacity-100 hover:text-white ${activeFilter === 'all' ? 'text-red-500 italic' : 'text-gray-400'}`}
          onClick={() => filterCards('all')}
        >
          All
        </span>
        <span
          className={`mx-2 uppercase cursor-pointer text-lg sm:text-lg md:text-lg lg:text-lg font-semibold transition-all duration-200 hover:italic opacity-55 hover:opacity-100 hover:text-white ${activeFilter === 'single' ? 'text-red-500 italic' : 'text-gray-400'}`}
          onClick={() => filterCards('single')}
        >
          Single
        </span>
        <span
          className={`mx-2 uppercase cursor-pointer text-lg sm:text-lg md:text-lg lg:text-lg font-semibold transition-all duration-200 hover:italic opacity-55 hover:opacity-100 hover:text-white ${activeFilter === 'ep' ? 'text-red-500 italic' : 'text-gray-400'}`}
          onClick={() => filterCards('ep')}
        >
          EP
        </span>
        <span
          className={`mx-2 uppercase cursor-pointer text-lg sm:text-lg md:text-lg lg:text-lg font-semibold transition-all duration-200 hover:italic opacity-55 hover:opacity-100 hover:text-white ${activeFilter === 'album' ? 'text-red-500 italic' : 'text-gray-400'}`}
          onClick={() => filterCards('album')}
        >
          Albums
        </span>
        <span
          className={`mx-2 uppercase cursor-pointer text-lg sm:text-lg md:text-lg lg:text-lg font-semibold transition-all duration-200 hover:italic opacity-55 hover:opacity-100 hover:text-white ${activeFilter === 'clip' ? 'text-red-500' : 'text-gray-400'}`}
          onClick={() => filterCards('clip')}
        >
          Clip
        </span>
      </div>
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {filteredCards.map((card, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden relative opacity-55 hover:opacity-100">
            <Link href="#">
              <Image src={card.coverImage} alt="Cover" className="w-full backdrop-sepia-0 " width={280} height={280}/>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-red-500 text-2xl cursor-pointer">
                &#9658;
              </div>
            </Link>
            <div className="p-4">
              <span className="block font-bold text-white">{card.artistName}</span>
              <span className="text-red-500">{card.title}</span>
              <div className="mt-2 flex align-center justify-center text-center">
                <Link href="#" className="text-white mr-2 hover:text-[#1DB954] ">
                  <FaSpotify/>
                </Link>
                <Link href="#" className="text-white mr-2 hover:text-[#660066]">
                  <FaApple />
                </Link>
                <Link href="#" className="text-white mr-2 hover:text-[#2E44B4]">
                  <FaNapster />
                </Link>
                <Link href="#" className="text-white  hover:text-red-500">
                  <FaYoutube />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default ReleaseSection;
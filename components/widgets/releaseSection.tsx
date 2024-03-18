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
          <h1 className="text-4xl font-bold">NOS DERNIERES REALISATIONS</h1>
          <p className="mt-2">Decouvre notre discographie , nos dernieres realisations et clip .</p>
          <div className="flex justify-center my-4">
        <span
          className={`cursor-pointer mx-2 text-sm font-semibold  px-4 py-2 ${activeFilter === 'all' ? 'text-red-500' : 'text-white'}`}
          onClick={() => filterCards('all')}
        >
          All
        </span>
        <span
          className={`cursor-pointer px-4 py-2 ${activeFilter === 'single' ? 'text-red-500' : 'text-white'}`}
          onClick={() => filterCards('single')}
        >
          Single
        </span>
        <span
          className={`cursor-pointer px-4 py-2 ${activeFilter === 'ep' ? 'text-red-500' : 'text-white'}`}
          onClick={() => filterCards('ep')}
        >
          EP
        </span>
        <span
          className={`cursor-pointer px-4 py-2 ${activeFilter === 'album' ? 'text-red-500' : 'text-white'}`}
          onClick={() => filterCards('album')}
        >
          Albums
        </span>
        <span
          className={`cursor-pointer px-4 py-2 ${activeFilter === 'clip' ? 'text-red-500' : 'text-white'}`}
          onClick={() => filterCards('clip')}
        >
          Clip
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {filteredCards.map((card, index) => (
          <div key={index} className="bg-[#1a1a1a] rounded-lg overflow-hidden relative">
            <Link href="#">
              <Image src={card.coverImage} alt="Cover" className="w-full backdrop-sepia-0 hover:opacity-15" width={280} height={280}/>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white hover:text-red-500 text-2xl cursor-pointer">
                &#9658;
              </div>
            </Link>
            <div className="p-4">
              <span className="block font-bold text-white">{card.artistName}</span>
              <span className="text-red-500">{card.title}</span>
              <div className="mt-2 flex align-center justify-center text-center">
                <Link href="#" className="text-white mr-2 hover:text-red-500 ">
                  <FaSpotify />
                </Link>
                <Link href="#" className="text-white mr-2 hover:text-red-500">
                  <FaApple />
                </Link>
                <Link href="#" className="text-white mr-2 hover:text-red-500">
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
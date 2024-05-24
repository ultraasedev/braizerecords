"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed w-full left-0 top-0 z-50 bg-black backdrop-filter backdrop-blur-lg shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <div className="logo">
            <Image src="/logo.png" width="100" height="100" alt="Logo" />
          </div>
        </Link>
        <div className="hidden md:flex flex-row justify-between items-center gap-3 text-lg uppercase">
          <Link href="#art_section" className="mr-3 hover:text-red-500 font-semibold">
            Artistes
          </Link>
          <Link href="#" className="mr-3 hover:text-red-500 font-semibold">
            Dernières Sorties
          </Link>
          <Link href="#" className="mr-3 hover:text-red-500 font-semibold">
            Services
          </Link>
          <Link href="#news" className="mr-3 hover:text-red-500 font-semibold">
            News
          </Link>
          <Link href="/contact" className="mr-3 hover:text-red-500 font-semibold">
            Contact
          </Link>
          <div className="join-us flex flex-row justify-between items-center gap-5 mr-5 text-1xl">
            <button className="jobsbutton hover:bg-red-700 hover:text-white">
              <Link href="#" className="text-center uppercase font-semibold text-xs tracking-wider">
                Nous Rejoindre
              </Link>
            </button>
            <div className="icons-social flex gap-3">
              <Link href="https://www.facebook.com/braizerecords">
                <i className="fab fa-facebook hover:text-red-500"></i>
              </Link>
              <Link href="https://www.instagram.com/braizerecords">
                <i className="fab fa-instagram hover:text-red-500"></i>
              </Link>
              <Link href="https://www.tiktok.com/braizerecords">
                <i className="fab fa-tiktok hover:text-red-500"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <i className="fas fa-bars text-2xl"></i>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden flex flex-col items-center bg-black text-white uppercase p-4">
          <Link href="#art_section" className="mb-2 hover:text-red-500 font-semibold" onClick={toggleMenu}>
            Artistes
          </Link>
          <Link href="#" className="mb-2 hover:text-red-500 font-semibold" onClick={toggleMenu}>
            Dernières Sorties
          </Link>
          <Link href="#" className="mb-2 hover:text-red-500 font-semibold" onClick={toggleMenu}>
            Services
          </Link>
          <Link href="#news" className="mb-2 hover:text-red-500 font-semibold" onClick={toggleMenu}>
            News
          </Link>
          <Link href="/contact" className="mb-2 hover:text-red-500 font-semibold" onClick={toggleMenu}>
            Contact
          </Link>
          <button className="jobsbutton hover:bg-red-700 hover:text-white mt-2 mb-2">
            <Link href="#" className="text-center uppercase font-semibold text-xs tracking-wider" onClick={toggleMenu}>
              Nous Rejoindre
            </Link>
          </button>
          <div className="icons-social flex gap-3 mt-2">
            <Link href="https://www.facebook.com/braizerecords">
              <i className="fab fa-facebook hover:text-red-500"></i>
            </Link>
            <Link href="https://www.instagram.com/braizerecords">
              <i className="fab fa-instagram hover:text-red-500"></i>
            </Link>
            <Link href="https://www.tiktok.com/braizerecords">
              <i className="fab fa-tiktok hover:text-red-500"></i>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

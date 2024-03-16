import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="fixed w-full left-0 top-0 z-50">
      <nav className="absolute top-0 font-normal flex w-full flex-row justify-between items-center justify-items-center shadow-md backdrop-filter backdrop-blur-lg bg-black">
        <Link href="/">
          <div className="logo">
            <Image src="/logo.png" width="100" height="100" alt="Logo" />
          </div>
        </Link>
        <div className="flex flex-row justify-between items-center gap-3 mr-7 text-lg uppercase">
          <div>
            <Link
              href="#art_section"
              className="top-1 mr-3 hover:text-red-500 "
            >
              Nos Artistes
            </Link>
          </div>
          <div>
            <Link href="#" className="top-1 mr-3 hover:text-red-500">
              Nos Dernières Sorties
            </Link>
          </div>
          <div>
            <Link href="#" className="top-1 mr-3 hover:text-red-500">
              Nos Services
            </Link>
          </div>
          <div>
            <Link href="#news" className="top-1 mr-3 hover:text-red-500">
              News
            </Link>
          </div>
          <div>
            <Link href="/contact" className="top-1 mr-3 hover:text-red-500">
              Contact
            </Link>
          </div>
          <div className="join-us flex flex-row justify-between items-center gap-5 mr-5 text-1xl">
            <button className="jobsbutton hover:bg-red-700 hover:text-white">
              <Link
                href="#"
                className="text-center uppercase font-semibold text-xs tracking-wider"
              >
                Nous Rejoindre
              </Link>
            </button>
            <div className="icons-social">
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
          <div className="mobilenav display-none">
            MENU<i id="burger" className="fas fa-bars"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

import Link from 'next/link';
const Footer = () => {
    return ( 
        <footer className="absolute bg-black text-white w-full border-t-red">
        <div className=" mx-auto px-4 py-10">
          {/* Section d inscription à la newsletter avec un fond rouge */}
          <div className="bg-red-500 p-6 rounded-lg shadow-md text-center w-full">
            <h2 className="text-2xl mb-2 font-bold">INSCRIVEZ-VOUS À NOTRE NEWSLETTER</h2>
            <p className="mb-4">Inscrivez-vous pour rester informés de notre actualités et celle de nos artistes</p>
            <div className="flex justify-center items-center">
              <input
                type="email"
                placeholder="Votre email"
                className="p-2 rounded-l-lg text-black"
              />
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-r-lg">
                S inscrire
              </button>
            </div>
          </div>
  
          {/* Liens et icônes de réseaux sociaux */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-10">
            <div className="flex flex-wrap justify-center mb-4 md:mb-0">
              <Link href="/about" className="mx-2 hover:text-red-500">À propos</Link>
              <Link href="/legal" className="mx-2 hover:text-red-500">Mentions légales</Link>
              <Link href="/recruitment" className="mx-2 hover:text-red-500">Recrutement</Link>
              <Link href="/index" className="mx-2 hover:text-red-500">Index Homme-Femmes</Link>
            </div>
            <div className="flex">
              {/* Icônes de réseaux sociaux utilisant des éléments <i> */}
              <Link href="/facebook" className="mx-2 hover:text-red-500"><i className="bx bxl-facebook"></i></Link>
              <Link href="/twitter" className="mx-2 hover:text-red-500"><i className="bx bxl-twitter"></i></Link>
              <Link href="/linkedin" className="mx-2 hover:text-red-500"><i className="bx bxl-linkedin"></i></Link>
              <Link href="/instagram" className="mx-2 hover:text-red-500"><i className="bx bxl-instagram"></i></Link>
              <Link href="/contact" className="mx-2 hover:text-red-500"><i className="bx bx-phone"></i></Link>
            </div>
          </div>
  
          <div className="text-center mt-10 left-[30px]">
            <p>© 2023 BRAZIERECORDS. Made with love.</p>
          </div>
        </div>
      </footer>
    );
       
}
 
export default Footer;
'use client';
import { useEffect, useState } from "react";

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "auto"; // Rétablit le défilement une fois le chargement terminé
    }, 2000); // Mettez ici la durée que vous souhaitez pour afficher le loader avant de le masquer

    // Bloque le défilement du corps pendant le chargement
    document.body.style.overflow = "hidden";

    return () => clearTimeout(timer);
  }, []);

  return loading ? (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-70 z-50">
      <div className="border border-gray-300 rounded-full border-t-4 border-b-4 border-r-4 border-l-0 h-12 w-12 animate-spin"></div>
    </div>
  ) : null;
};

export default Loader;


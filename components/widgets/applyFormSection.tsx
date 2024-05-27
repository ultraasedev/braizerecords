"use client";
import { useState, ChangeEvent, FormEvent } from "react";

const ApplyFormSection = () => {
  const [formData, setFormData] = useState<{
    artistName: string;
    fullName: string;
    email: string;
    instagramLink: string;
    youtubeLink: string;
    spotifyDeezerLink: string;
    audioFile: File | null;
    bio: string;
  }>({
    artistName: "",
    fullName: "",
    email: "",
    instagramLink: "",
    youtubeLink: "",
    spotifyDeezerLink: "",
    audioFile: null,
    bio: ""
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, audioFile: event.target.files ? event.target.files[0] : null });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <section className="relative text-white py-12 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: "url('https://wallpapers.com/images/hd/music-studio-background-1920-x-1301-r5v6a1g6lhbmxhvo.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative container mx-auto">
        <div className="text-center py-6">
          <h1 className="text-2xl xs:text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-black bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-orange-600 uppercase">
            <span className="mx-1 text-red-500 font-black text-4xl relative inline-block stroke-current">
              Soumettre une maquette
              <svg
                className="absolute -bottom-0.5 w-full max-h-1.5"
                viewBox="0 0 55 5"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
              >
                <path d="M0.652466 4.00002C15.8925 2.66668 48.0351 0.400018 54.6853 2.00002" strokeWidth="2"></path>
              </svg>
            </span>
          </h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg text-white font-semiblack">
            Découvre la liste de nos artistes et l'accompagnement qu'on leur propose.
          </p>
        </div>
        {!isFormVisible && (
          <div className="text-center">
            <button
              onClick={toggleFormVisibility}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-200"
            >
              Soumettre une maquette
            </button>
          </div>
        )}
        {isFormVisible && (
          <div className="relative max-w-2xl mx-auto p-6 bg-white text-black rounded-lg shadow-md">
            <button
              onClick={toggleFormVisibility}
              className="absolute top-2 right-2 text-white rounded-full p-1 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-700 hover:to-orange-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="artistName" className="block text-lg mb-2 text-red-500 font-semibold">Nom d'artiste</label>
                <input
                  type="text"
                  id="artistName"
                  name="artistName"
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="fullName" className="block text-lg mb-2 text-red-500 font-semibold">Nom Prénom</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg mb-2 text-red-500 font-semibold">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="instagramLink" className="block text-lg mb-2 text-red-500 font-semibold">Lien Instagram</label>
                <input
                  type="url"
                  id="instagramLink"
                  name="instagramLink"
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400"
                  value={formData.instagramLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="youtubeLink" className="block text-lg mb-2 text-red-500 font-semibold">Lien YouTube</label>
                <input
                  type="url"
                  id="youtubeLink"
                  name="youtubeLink"
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400"
                  value={formData.youtubeLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="spotifyDeezerLink" className="block text-lg mb-2 text-red-500 font-semibold">Lien Spotify / Deezer</label>
                <input
                  type="url"
                  id="spotifyDeezerLink"
                  name="spotifyDeezerLink"
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400"
                  value={formData.spotifyDeezerLink}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="audioFile" className="block text-lg mb-2 text-red-500 font-semibold">Fichier Audio</label>
                <label htmlFor="audioFile" className="flex flex-col items-center gap-2 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-white stroke-red-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-gray-600 font-medium">Importer un fichier</span>
                </label>
                <input
                  type="file"
                  id="audioFile"
                  name="audioFile"
                  accept="audio/*"
                  className="w-full p-2 hidden"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="bio" className="block text-lg mb-2 text-red-500 font-semibold">Description / Bio</label>
                <textarea
                  id="bio"
                  name="bio"
                  className="w-full p-2 rounded bg-gray-200 border border-gray-400"
                  rows={4}
                  value={formData.bio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition duration-200"
                >
                  Envoyer
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default ApplyFormSection;

import Image from "next/image";
import Link from "next/link";

const ServiceSection = () => {
  return (
    <section className="services-section bg-red-500 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center py-8 mb-6">
          <h1 className="text-4xl md:text-4xl lg:text-4xl font-bold text-white">LABELS & SERVICES</h1>
          <p className="mt-2 text-sm md:text-base lg:text-lg text-white font-semibold">
            Découvrez toutes les étendues de nos Prestations Labels & Services ainsi que nos différents Pôles d'activités.
          </p>
        </div>

        <div className="bg-white rounded-lg flex flex-col md:flex-row items-center w-full mb-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <Image src="/servsection/svs_01.png" alt="Braize Records" className="w-full md:w-1/2 rounded-lg transform hover:scale-105 transition-transform duration-200" width={200} height={150} />
          <div className="p-10">
            <h3 className="text-xl font-bold text-black mb-4">Braize Records</h3>
            <p className="text-black mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.
            </p>
            <Link href="#" className="bg-red-700 text-white py-2 px-4 rounded-md font-semibold transition-all duration-200 hover:italic">
              Learn More
            </Link>
          </div>
        </div>

        <div className="bg-black rounded-lg flex flex-col md:flex-row items-center w-full mb-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="p-10 text-right">
            <h3 className="text-xl font-bold text-gray-200 mb-4">Braize Records</h3>
            <p className="text-gray-200 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.
            </p>
            <Link href="#" className="bg-red-700 text-black py-2 px-4 rounded-md font-semibold transition-all duration-200 hover:italic">
              Learn More
            </Link>
          </div>
          <Image src="/servsection/svs_01.png" alt="Braize Records" className="w-full md:w-1/2 rounded-lg transform hover:scale-105 transition-transform duration-200" width={200} height={150} />
          </div>

          <div className="bg-white rounded-lg flex flex-col md:flex-row items-center w-full mb-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
        <Image src="/servsection/svs_01.png" alt="Braize Records" className="w-full md:w-1/2 rounded-lg transform hover:scale-105 transition-transform duration-200" width={200} height={150} />
          <div className="p-10">
            <h3 className="text-xl font-bold text-black mb-4">Braize Records</h3>
            <p className="text-black mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.
            </p>
            <Link href="#" className="bg-red-700 text-white py-2 px-4 rounded-md font-semibold transition-all duration-200 hover:italic">
              Learn More
            </Link>
          </div>
        </div>
        <div className="bg-black rounded-lg flex flex-col md:flex-row items-center w-full mb-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
          <div className="p-10 text-right">
            <h3 className="text-xl font-bold text-gray-200 mb-4">Braize Records</h3>
            <p className="text-gray-200 mb-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.
            </p>
            <Link href="#" className="bg-red-700 text-black py-2 px-4 rounded-md font-semibold transition-all duration-200 hover:italic">
              Learn More
            </Link>
          </div>
          <Image src="/servsection/svs_01.png" alt="Braize Records" className="w-full md:w-1/2 rounded-lg transform hover:scale-105 transition-transform duration-200" width={200} height={150} />
          </div>
        </div>
    </section>
  );
}

export default ServiceSection;

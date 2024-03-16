
import Image from "next/image";
import Link from "next/link";

const ServiceSection = () => {
    return ( 
    <section className="services-section bg-black py-12 ">
          <div className="container mx-auto px-4">
          <div className="text-center py-8 mb-2">
          <h1 className="text-4xl font-bold">Labels & Services</h1>
          <p className="mt-2">Decouvre toutes les etendues de nos Prestations Labels & Services ainsi que nos differents Poles d activites .</p>
          </div>
   
    <div className="bg-black rounded-lg flex items-center w-full mb-8">
     
      <Image src="/servsection/svs_01.png" alt="Braize Records" className="w-1/2 rounded-l-lg" width={400} height={300}/>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">Braize Records</h3>
        <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.</p>
        <Link href="#" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Learn More</Link>
      </div>
    </div>

   
    <div className="bg-white rounded-lg flex items-center w-full mb-8">
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-4">BlackWeb</h3>
        <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.</p>
        <Link href="#" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Learn More</Link>
      </div>
      <Image src="/servsection/svs_01.png" alt="BlackWeb" className="w-1/2 rounded-r-lg"  width={400} height={300}/>
    </div>

  
    <div className="bg-black rounded-lg flex items-center w-full mb-8">
      <Image src="/servsection/svs_01.png" alt="iCare Publishing" className="w-1/2 rounded-l-lg"  width={400} height={300}/>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-4">iCare Publishing</h3>
        <p className="text-gray-300 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.</p>
        <Link href="#" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Learn More</Link>
      </div>
    </div>


    <div className="bg-white rounded-lg flex items-center w-full">
      <div className="p-6">
        <h3 className="text-xl font-bold text-black mb-4">BraizerProd</h3>
        <p className="text-gray-700 mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies tincidunt, nunc nisl aliquam nisl, eget aliquam nisl nunc vel nunc.</p>
        <Link href="#" className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700">Learn More</Link>
      </div>
      <Image src="/servsection/svs_01.png" alt="BraizerProd" className="w-1/2 rounded-r-lg"  width={300} height={400}/>
    </div>
  </div>
  </section> );
}
 
export default ServiceSection;
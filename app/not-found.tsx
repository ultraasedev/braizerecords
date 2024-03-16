import Link from "next/link";


const NotFound = () => {
    return ( <section className="flex w-full h-[600px] align-center items-center text-center  bg-black text-white">
    <div className=" align-center items-center text-center ml-[30%] leading-[80px]">
    <h1 className="text-center text-red-600 text-2xl uppercase ">Cette Page N Existe ou ne Fonctionne pas</h1>
    <Link href="/" className="relative uppercase mt-9 text-xl  hover:text-red-500">Go To Home </Link>
    </div>
    
    </section> );
}
 
export default NotFound;
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-screen min-h-[70vh] md:min-h-[60vh] lg:min-h-[90vh] flex gap-6 flex-col md:flex-row justify-around items-center bg-white px-4 md:px-12 text-black">
      <div className="flex flex-col gap-6  ">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-extrabold">
          Timeless Elegance <br />
          on your Wrist
        </h1>
        <p className="text-md text-neutral-600 w-[60%]">
          Discover our curated collection of premium watches, crafted for those
          who appreciate sophistication and precision
        </p>
        <Link href={'/collection'}> <button className="py-4 mt-3 px-6 rounded-xl bg-neutral-900 text-white">Shop the Collection</button> </Link>
      </div>
      <div className=" p-1 rounded-xl w-[450px] ">
        <Image src={'/images/hero-watch.jpg'} className="rounded-xl" alt="watch img" width={500} height={500}></Image>
      </div>
    </div>
  );
};

export default Hero;

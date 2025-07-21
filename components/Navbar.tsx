"use client"
import { Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent } from "react";
const Navbar = () => {
  const router = useRouter()
  const handleSearch = async(e:ChangeEvent<HTMLInputElement>)=>{
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set("q",e.target.value)

    const searchQuery = urlParams.toString()
    router.push(`/search?${searchQuery}`)
  }
  return (
    <div className="px-4 md:px-12 py-4 md:py-6 flex items-center justify-between text-black">
      <div>
        <Link href={"/"} className="text-2xl font-extrabold font-mono">Watchz</Link>
      </div>
      <div className="md:w-[400px]  relative flex justify-center items-center gap-4  p-2  rounded-xl border">
        <div ><Search className="text-neutral-600 w-4.5"/></div>
        <input onChange={handleSearch} type="text" placeholder="Search..." className="outline-0 border-none w-full"/>
      </div>
      <Link href={"/add-product"}>
        <button className="py-2.5 px-6 bg-neutral-900 text-white rounded-xl cursor-pointer">add product</button>
      </Link>
    </div>
  );
};

export default Navbar;

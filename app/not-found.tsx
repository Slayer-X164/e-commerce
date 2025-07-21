import Link from "next/link";
export default function notFoundPage(){
    return (
        <div className="w-screen h-[70vh] flex justify-center flex-col items-center">
            <h1 className="text-8xl font-bold">404</h1>
            <p>Oops, Page not found <Link className="text-blue-600 underline" href={'/'}>go back home </Link></p>
        </div>
    )
}
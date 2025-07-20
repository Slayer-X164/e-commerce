import Image from "next/image"
import Link from "next/link"

const ProductList = () => {
    const products = ["","","","","","","","",""]
  return (
    <div id="product" className="px-4 py-12 md:px-12 flex flex-col justify-center items-center">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center">

            {products.map((product,idx)=>(
                <Link key={idx} href={`/product/${product}`}>
                    <Image src={'/images/p1.jpg'} alt="product img" width={500} height={500} className="max-w-[17rem] h-72 object-center object-cover rounded-xl"/>
                    <div>
                        <h2 className="text-lg font-semibold">image title: very good</h2>
                        <p className="text-md">₹12000</p>
                    </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductList
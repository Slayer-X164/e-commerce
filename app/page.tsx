import Hero from "@/components/Hero";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div className="w-screen bg-neutral-200">
      <Hero />
        <h1 className="text-6xl text-center pt-12 px-4 md:px-12 font-semibold">Product Collection</h1>
      <ProductList />
    </div>
  );
}

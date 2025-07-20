import AddProductForm from "@/components/AddProductForm";


export default function addProduct() {
  return (
    <div className="px-4 md:px-12 pb-8 bg-neutral-100">
      <h2 className="text-center font-semibold pt-8 text-xl md:text-2xl w-full ">
        Add a new Product
      </h2>
      {/* form component */}
      <AddProductForm/>
    </div>
  );
}

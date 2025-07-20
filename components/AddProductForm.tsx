"use client";
import addAction from "@/utils/addAction";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";

const AddProductForm = () => {
  const router = useRouter();
  const [imageURL, setImageURL] = useState("");
  const clientAddAction = async (formData: FormData) => {
    const { error, success } = await addAction(formData);
    if (error) {
      toast.error(error);
    }
    if (success) {
      toast.success(success);
      router.push("/");
    }
  };


  //   image preview
  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const fileSize = file.size;
      if (Math.round(fileSize / 1024) > 1024) {
        toast.error("Image greater than 1 mb is not allowed");
      } else {
        setImageURL(URL.createObjectURL(file));
      }
    }
  };

  return (
    <form
      action={clientAddAction}
      className="w-full max-w-xl mx-auto flex flex-col justify-center items-center gap-4 mt-4 "
    >
      <div className="flex flex-col w-full ">
        <label className="text-lg mb-2">product image</label>
        {imageURL && (
          <Image
            src={imageURL}
            alt="product img"
            width={1000}
            height={1000}
            className="w-full h-72 object-center object-cover rounded-xl"
          />
        )}
        <input
          type="file"
          accept="image/*"
          name="image"
          className="bg-neutral-200 rounded-xl p-2 cursor-pointer text-neutral-500"
          onChange={handleImageChange}
        />
      </div>
      <div className="flex flex-col w-full ">
        <label className="text-lg mb-2">name</label>
        <input
          type="text"
          placeholder="enter product name"
          name="name"
          className="bg-neutral-200 rounded-xl p-2"
        />
      </div>
      <div className="flex flex-col w-full ">
        <label className="text-lg mb-2">description</label>
        <textarea
          name="description"
          id="description"
          placeholder="enter product description"
          rows={3}
          className="bg-neutral-200 rounded-xl p-2"
        ></textarea>
      </div>
      <div className="flex flex-col w-full ">
        <label className="text-lg mb-2">price</label>
        <input
          type="number"
          placeholder="enter price"
          className="bg-neutral-200 rounded-xl p-2"
          name="price"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-neutral-900 text-white py-3 rounded-xl cursor-pointer mt-2"
      >
        add
      </button>
    </form>
  );
};

export default AddProductForm;

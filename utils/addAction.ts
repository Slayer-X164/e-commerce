"use server";

import { connectDB } from "@/app/api/db/connectDB";
import cloudinary from "./cloudinary";
import Product from "@/app/api/models/products.model";

export default async function addAction(formData: FormData) {
  try {
    const image = formData.get("image") as File;
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");

    if (!image || !name || !description || !price) {
      console.log("All fields are required");
      return {
        error: "All fields are required",
      };
    }
    await connectDB();
    //image process
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const imageResponse: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "auto",
            folder: "watchz",
          },
          async (error, result) => {
            if (error) {
              return reject(error.message);
            }
            return resolve(result);
          }
        )
        .end(buffer);
    });
    console.log("image response: ", imageResponse);
    //store in db
    const newProduct = await Product.create({
      image: imageResponse.secure_url,
      name,
      description,
      price,
    });

    return {
      success: "Product added successfully",
    };
  } catch (error: any) {
    console.log(error.message);
    return {
      error: "something went wrong",
    };
  }
}

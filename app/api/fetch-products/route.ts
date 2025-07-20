import { connectDB } from "../db/connectDB";
import Product from "../models/products.model";

export async function GET() {
  await connectDB();
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    return Response.json(
        { products, status: 200 }
    );
  } catch (error:any) {
    console.log("error while fetching products : ",error.message);
    return Response.json(
        {message:'error displaying products',status:500}
    )
  }
}

import { Category } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const category = await Category.findOne({ slug });

    return NextResponse.json(category);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Category!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await Category.deleteOne({ slug });
    return NextResponse.json("Category deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};

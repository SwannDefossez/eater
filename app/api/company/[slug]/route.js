import { Company } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    const company = await Company.findOne({ slug });

    return NextResponse.json(company);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch Company!");
  }
};

export const DELETE = async (request, { params }) => {
  const { slug } = params;

  try {
    connectToDb();

    await Company.deleteOne({ slug });
    return NextResponse.json("Company deleted");
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete post!");
  }
};

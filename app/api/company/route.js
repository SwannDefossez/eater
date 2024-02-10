import { Company } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();

    const companies = await Company.find();
    return NextResponse.json(companies);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch company!");
  }
};

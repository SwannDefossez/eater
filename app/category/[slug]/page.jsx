import React from "react";
import { getCategory } from "@/lib/data";
import { redirect } from "next/navigation";
import Image from "next/image";
// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/category/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const category = await getCategory(slug);

  return {
    title: category?.title,
  };
};

const page = async ({ params }) => {
  const { slug } = params;
  const category = await getData(slug);
  console.log(category);
  if (!category) {
    redirect("/error");
  }
  return (
    <div>
      <h2>category {slug}</h2>
      <Image src={category.img} alt="test" width={500} height={500} />
    </div>
  );
};

export default page;

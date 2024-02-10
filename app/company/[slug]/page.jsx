import React from "react";
import { getCompany } from "@/lib/data";
import { redirect } from "next/navigation";
// FETCH DATA WITH AN API
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/company/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const company = await getCompany(slug);

  return {
    title: company?.title,
  };
};

const page = async ({ params }) => {
  const { slug } = params;
  const company = await getData(slug);
  console.log(company);
  if (!company) {
    redirect("/error");
  }
  return (
    <div>
      <h2>Company {slug}</h2>
    </div>
  );
};

export default page;

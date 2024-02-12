import React from "react";
import { getCompany } from "@/lib/data";
import { redirect } from "next/navigation";
import Image from "next/image";
import css from "./company.module.scss";
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
  if (!company) {
    redirect("/error");
  }
  return (
    <div className={css.container}>
      <div className={css.banner}>
        <Image src={company.img} alt="test" width={500} height={200} />
      </div>
      <div>
        <h1>{company.title}</h1>
        <h4>Note ( à faire )</h4>
      </div>
      <div>
      </div>
      <div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default page;

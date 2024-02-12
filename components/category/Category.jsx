"use server";
import React from "react";
import css from "./category.module.scss";
import { getCategories } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
const Category = async () => {
  var categories = await getCategories();
  console.log(categories);
  categories = JSON.parse(JSON.stringify(categories));
  return (
    <div className={css.container}>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          width: "80vw",
          borderBottom: "2px solid grey",
          paddingBottom: "1rem"
        }}
      >
        <h2>Category</h2>
      </div>
      <div className={css.list}>
        {categories.map((category) => {
          return (
            <Link
              href={`/category/${category.slug}`}
              className={`${css.card} ${"bcg" + Math.floor(Math.random() * 5)}`}
              key={category._id}
            >
              <Image src={category.img} alt="" width={100} height={100} />
              <div className={css.card__text}>
                <h3>{category.title}</h3>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Category;

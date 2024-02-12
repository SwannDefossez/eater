"use client";

import { addProduct } from "@/lib/action";
import { useState } from "react";
import { useFormState } from "react-dom";

const ProductForm = ({ categories }) => {
  const [state, formAction] = useFormState(addProduct, undefined);
  const [tag, setTag] = useState([]);

  const handleChange = (e) => {
    if (tag.includes(e.target.value)) {
      let pos = tag.indexOf(e.target.value);
      setTag([...tag.slice(0, pos), ...tag.slice(pos + 1, tag.length)]);
    } else {
      setTag((oldArray) => [...oldArray, e.target.value]);
    }
  };
  return (
    <>
      <h2>{tag}</h2>
      <form action={formAction}>
        <h1>Add NewProduct</h1>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="hidden" name="tag" value={tag} />
        <input type="text" name="img" placeholder="link" />
        <button>Add</button>
        {state?.error}
      </form>
      {categories.map((category) => {
        return (
          <div key={category._id}>
            <input
              onChange={(e) => handleChange(e)}
              type="checkbox"
              name="tags"
              value={category.title}
            />
            <label htmlFor={category.title}>{category.title}</label>
          </div>
        );
      })}
    </>
  );
};

export default ProductForm;

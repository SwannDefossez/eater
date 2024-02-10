"use client";

import { addCategory } from "@/lib/action";
import Image from "next/image";
// import styles from "./CategoryForm.module.css";
import { useFormState } from "react-dom";

const CategoryForm = () => {
  const [state, formAction] = useFormState(addCategory, undefined);

  return (
    <>
      <form action={formAction}>
        <h1>Add New Category</h1>
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="img" placeholder="link" />
        <button>Add</button>
        {state?.error}
      </form>
    </>
  );
};

export default CategoryForm;

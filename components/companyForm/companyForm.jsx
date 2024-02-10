"use client";

import { addCompany } from "@/lib/action";
import Image from "next/image";
// import styles from "./CompanyForm.module.css";
import { useFormState } from "react-dom";

const CompanyForm = ({ userId }) => {
  const [state, formAction] = useFormState(addCompany, undefined);

  return (
    <>
      <form action={formAction}>
        <h1>Add New Company</h1>
        <input type="hidden" name="userId" value={userId} />
        <input type="text" name="title" placeholder="title" />
        <input type="text" name="slug" placeholder="slug" />
        <input type="text" name="img" placeholder="link" />
        <button>Add</button>
        {state?.error}
      </form>
    </>
  );
};

export default CompanyForm;

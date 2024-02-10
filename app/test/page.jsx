import { Suspense } from "react";
import CompanyForm from "@/components/companyForm/companyForm";
import React from "react";
import { auth } from "@/lib/auth";
import CategoryForm from "@/components/categoryForm/categoryForm";
const CompanyPage = async () => {
  const session = await auth();
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CompanyForm userId={session.user.id} />
        <CategoryForm />
      </Suspense>
    </div>
  );
};

export default CompanyPage;

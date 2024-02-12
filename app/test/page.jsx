import { Suspense } from "react";
import CompanyForm from "@/components/companyForm/companyForm";
import React from "react";
import { auth } from "@/lib/auth";
import CategoryForm from "@/components/categoryForm/categoryForm";
import ProductForm from "@/components/productForm/productForm";
import { getCategories } from "@/lib/data";
const CompanyPage = async () => {
  const session = await auth();
  var categories = await getCategories();
  categories = JSON.parse(JSON.stringify(categories));
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CompanyForm userId={session.user.id} />
        <CategoryForm />
        <ProductForm categories={categories} />
      </Suspense>
    </div>
  );
};

export default CompanyPage;

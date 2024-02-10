import { User, Company, Category } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getUser = async (id) => {
  noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    console.log(user);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const getCompanies = async () => {
  try {
    connectToDb();
    const companies = await Company.find();
    return companies;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch companies!");
  }
};

export const getCompany = async (slug) => {
  try {
    connectToDb();
    const company = await Company.findOne({ slug });
    return company;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch companies!");
  }
};

export const getCategories = async () => {
  try {
    connectToDb();
    const categories = await Category.find();
    return categories;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch companies!");
  }
};

export const getCategory = async (slug) => {
  try {
    connectToDb();
    const category = await Category.findOne({ slug });
    return category;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch companies!");
  }
};



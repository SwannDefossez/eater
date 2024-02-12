"use server";
import { User, Company, Category, Product } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs";
import { isRedirectError } from "next/dist/client/components/redirect";
export const handleGithubLogin = async () => {
  "use server";
  await signIn("github");
};

export const handleLogout = async () => {
  "use server";
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, password, img, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "les mots de passes de correspondent pas !" };
  }

  try {
    connectToDb();

    const user = await User.findOne({ username });

    if (user) {
      return { error: "L'utilisateur existe déjà" };
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });

    await newUser.save();
    console.log("saved to db");

    return { success: true };
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const login = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    console.log(JSON.stringify(err));
    if (isRedirectError(err)) {
      throw err;
    }
    if (err.type.includes("CredentialsSignin")) {
      return { error: "Invalid username or password" };
    }
    throw err;
  }
};

export const addCompany = async (prevState, formData) => {
  const { title, slug, userId, img } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newCompany = new Company({
      title,
      img,
      userId,
      slug,
    });
    await newCompany.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addCategory = async (prevState, formData) => {
  const { title, img, slug } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newCategory = new Category({
      title,
      img,
      slug,
    });
    await newCategory.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const addProduct = async (prevState, formData) => {
  const { title, img, tag, slug } = Object.fromEntries(formData);

  const tags = tag.split(",");

  try {
    connectToDb();
    const newProduct = new Product({
      title,
      img,
      tags,
      slug,
    });
    await newProduct.save();
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

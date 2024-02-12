import Header from "@/components/header/Header";
import css from "./page.module.scss";
import Trends from "@/components/trends/Trends";
import Category from "@/components/category/Category";
export default function Home() {
  return (
    <main className={css.main}>
      <Header />

      <Trends />
      <Category />
    </main>
  );
}

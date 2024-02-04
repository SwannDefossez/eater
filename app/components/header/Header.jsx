import React from "react";
import css from "./Header.module.scss";
import Menu from "../menu/Menu";
import UserMenu from "../userMenu/UserMenu";
import Login from "../loginButton/Login";
import Image from "next/image";
const Header = () => {
  const logged = false;
  return (
    <div className={css.header}>
      <Menu />
      <div className={css.header__logo}>
        <Image
          style={{ objectFit: "contain" }}
          src="/logo.png"
          alt="logo"
          width={500}
          height={500}
        />
      </div>
      {logged ? <UserMenu /> : <Login />}
    </div>
  );
};

export default Header;

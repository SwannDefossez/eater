"use client";
import React, { useState } from "react";
import css from "@/components/header/Header.module.scss";
import Link from "next/link";
import { CiLogin } from "react-icons/ci";
import UserMenu from "@/components/userMenu/UserMenu";
import Menu from "@/components/menu/Menu";
import Image from "next/image";

const SessionProvider = ({ session }) => {
  const [isMenuOpen1, setMenuOpen1] = useState(false);
  const [isMenuOpen2, setMenuOpen2] = useState(false);

  const handleMenuToggle1 = () => {
    setMenuOpen1(!isMenuOpen1);
    setMenuOpen2(false);
  };

  const handleMenuToggle2 = () => {
    setMenuOpen2(!isMenuOpen2);
    setMenuOpen1(false);
  };

  return (
    <div className={css.header}>
      <Menu isMenuOpen={isMenuOpen1} onMenuToggle={handleMenuToggle1} />

      <Link href={"/"} className={css.header__logo}>
        <Image
          style={{ objectFit: "contain" }}
          src="/logo.png"
          alt="logo"
          width={500}
          height={500}
        />
      </Link>
      {session?.user ? (
        <>
          <UserMenu isMenuOpen={isMenuOpen2} onMenuToggle={handleMenuToggle2} />
        </>
      ) : (
        <Link href={"/login"}>
          <CiLogin size={32} />
        </Link>
      )}
    </div>
  );
};

export default SessionProvider;

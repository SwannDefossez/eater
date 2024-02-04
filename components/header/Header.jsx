import React from "react";
import css from "./Header.module.scss";

import Image from "next/image";
import Link from "next/link";

import Menu from "../menu/Menu";

import { auth } from "@/lib/auth";
import { handleLogout } from "@/lib/action";

import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
const Header = async () => {
  const session = await auth();

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
      {session?.user ? (
        <>
          <form action={handleLogout}>
            <button>
              <CiLogout size={32} />
            </button>
          </form>
        </>
      ) : (
        <Link href={"/login"}>
          <CiLogin  size={32}/>
        </Link>
      )}
    </div>
  );
};

export default Header;

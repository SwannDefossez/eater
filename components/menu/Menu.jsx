"use client";
import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import css from "./Menu.module.scss";
import Link from "next/link";
const Menu = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className={css.container}>
      <Hamburger
        className={css.menu__burger}
        toggled={isOpen}
        toggle={setOpen}
      />

      <div className={`${css.menu} ${isOpen ? css.expanded : css.collapsed}`}>
        <ul>
          <li>
            <Link href="/"> Home </Link>
          </li>
          <li className={css.border}>
            <Link href="/"> About</Link>
          </li>
          <li className={css.border}>
            <Link href="/"> Services</Link>
          </li>
          <li className={css.border}>
            <Link href="/"> Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;

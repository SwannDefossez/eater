"use client";
import React, { useState } from "react";
import { Rotate as Hamburger } from "hamburger-react";
import css from "./Menu.module.scss";
import Link from "next/link";

const Menu = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <div onClick={onMenuToggle} className={css.container}>
      <Hamburger toggled={isMenuOpen} className={css.menu__burger} />
      <div
        className={`${css.menu} ${isMenuOpen ? css.expanded : css.collapsed}`}
      >
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

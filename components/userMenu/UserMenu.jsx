"use client";
import Link from "next/link";
import React, { useState } from "react";

import { handleLogout } from "@/lib/action";
import { BsGear } from "react-icons/bs";
import css from "./UserMenu.module.scss";
const UserMenu = ({ isMenuOpen, onMenuToggle }) => {
  return (
    <div className={css.container}>
      <button
        className={`${css.gear} ${isMenuOpen ? css.rotate : ""}`}
        onClick={onMenuToggle}
      >
        <BsGear size={32} />
      </button>

      <div
        className={`${css.userMenu} ${
          isMenuOpen ? css.expanded : css.collapsed
        }`}
      >
        <ul>
          <li>
            <Link href={"/profil"}>Profil</Link>
          </li>
          <li className={css.border}>Thème</li>
          <li className={css.border}>
            <form action={handleLogout}>
              <button style={{ width: "100%", height: "5rem" }}>
                Déconnexion
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;

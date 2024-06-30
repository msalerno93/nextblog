"use client";
import React, { useState } from "react";
import styles from "./navlinks.module.css";
import NavBarLink from "../navbarlink/NavBarLink";

const navLinks = [
  {
    id: 1,
    title: "Homepage",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
  },
  {
    id: 4,
    title: "Blog",
    path: "/blog",
  },
];

const NavLinks = () => {
  const [open, setOpen] = useState(false);
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {navLinks.map(({ id, title, path }) => {
          return <NavBarLink path={path} key={id} title={title} />;
        })}
        {session ? (
          <>
            {isAdmin && <NavBarLink path="/admin" title="Admin" key="12" />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavBarLink path="/login" title="Login" key="10" />
        )}
      </div>
      <button
      className={styles.menuButton}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        Menu
      </button>
      {open && (
        <div className={styles.mobileLinks}>
          {navLinks.map(({ id, title, path }) => {
            return <NavBarLink path={path} key={id} title={title} />;
          })}
        </div>
      )}
    </div>
  );
};

export default NavLinks;

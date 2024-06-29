import Link from "next/link";
import React from "react";

const NavLinks = () => {
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

  return (
    <div>
      {navLinks.map(({ id, title, path }) => {
        return (
          <Link key={id} href={path}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;

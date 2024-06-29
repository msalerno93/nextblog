"use client"

import Link from "next/link";
import styles from "./navbarlink.module.css";
import { usePathname } from "next/navigation";

const NavBarLink = ({ path, title, id }) => {
  const pathName = usePathname();

  return (
    <Link
      className={`${styles.container} ${pathName === path && styles.active}`}
      key={id}
      href={path}
    >
      {title}
    </Link>
  );
};

export default NavBarLink;

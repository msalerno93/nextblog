import React from 'react'
import NavLinks from './navlinks/NavLinks'
import styles from "./navbar.module.css"
import Link from 'next/link'
import { FaBlog } from "react-icons/fa";


const Navbar = () => {
  return (
    <div className={styles.container}>
        <Link href="/" className={styles.logo}>
        <FaBlog/>
        </Link>
        <div>
            <NavLinks />
        </div>
    </div>
  )
}

export default Navbar
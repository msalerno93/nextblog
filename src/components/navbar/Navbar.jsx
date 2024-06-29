import React from 'react'
import NavLinks from './navlinks/NavLinks'
import styles from "./navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Logo</div>
        <div>
            <NavLinks />
        </div>
    </div>
  )
}

export default Navbar
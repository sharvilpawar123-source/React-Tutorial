import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>Web Development</h3>
      <button className={styles.btn}>Sign In</button>
      {/* //not applied */}
    </div>
  )
}

export default Header

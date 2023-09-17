import React from 'react'
import styles from './Header.module.scss'


function Header() {
  return (
    <header className={styles.header}>
        <div>
            Project
        </div>
        <div>
            <input type="text" />
        </div>
    </header>
  )
}

export default Header
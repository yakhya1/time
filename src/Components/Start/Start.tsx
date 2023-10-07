import React from 'react'
import styles from "../Start/Start.module.scss"
import { Link } from 'react-router-dom'
function Start() {
  return (
    <div className={styles.body}>
        
    <div className={styles.main}>
        <p>
            <Link to="/register">
            START
            </Link>
        </p>
    </div>
    </div>
  )
}

export default Start
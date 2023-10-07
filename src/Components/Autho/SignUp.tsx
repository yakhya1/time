import React from 'react'
import styles from "./Sign.module.scss"

function SignUp() {
  return (
    <div className={styles.SignUp}>
        <div className={styles.inputs_div}>
        <p>SIGN UP</p>
        <form>
            <input type="text" placeholder='Логин' />
            <input type="password" placeholder='Пароль' />
        </form>
        <button>Создать аккаунт</button>
        </div>
    </div>
  )
}

export default SignUp
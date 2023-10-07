import React from 'react'
import styles from "./Sign.module.scss"

function SignIn() {
  return (
    <div className={styles.SignUp}>
    <div className={styles.inputs_div}>
    <p>SIGN IN</p>
    <form>
        <input type="text" placeholder='Логин' />
        <input type="password" placeholder='Пароль' />
    </form>
    <button>Войти</button>
    </div>
</div>
)
}

export default SignIn
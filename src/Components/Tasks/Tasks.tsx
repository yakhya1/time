import React from "react";
import styles from "./Tasks.module.scss";

function Tasks() {
  return <div className={styles.tasks}>
    <div className={styles.sidebar}>
        <ul>
            <li>Отклики</li>
            <li>Тех.Собесы</li>
            <li>HR собесы</li>
            <li>Цели</li>
        </ul>
    </div>
  </div>;
}

export default Tasks;

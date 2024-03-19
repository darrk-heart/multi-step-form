import React from "react";
import styles from "./Form2.module.css";

function Form2({ children }) {
  return (
    <>
      <div className={styles.background}>
        {children}
        <div>Hello WOrld</div>
      </div>
    </>
  );
}

export default Form2;

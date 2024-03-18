import React from "react";
import styles from "./Form1.module.css";

function Form1({ children }) {
  return (
    <>
      <div className={styles.background}>
        {children}
        <div>Hello WOrld</div>
      </div>
    </>
  );
}

export default Form1;

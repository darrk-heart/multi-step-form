import React from "react";
import styles from "./Form2.module.css";

function Form2({ children }) {
  return (
    <>
      <div className={styles.background}>
        {children}
        <div className={styles.form2bg}>
          <div className={styles.maintext}>
            <h1>Select your plan</h1>
            <p>You have the option of monthly or yearly billing.</p>
          </div>
          <div className={styles.inputs}></div>
          <div className={styles.nextstep}>
            <span>Next Step</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form2;

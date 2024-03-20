import React from "react";
import styles from "./Form2.module.css";
import arcade from "../../assets/icon-arcade.svg";
import advance from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";

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
          <div className={styles.main}>
            <div className={styles.selects}>
              <div>
                <img src={arcade} alt="arcade" />
                <p>Arcade</p>
                <span>$9/mo</span>
              </div>
              <div>
                <img src={advance} alt="advance" />
                <p>Advanced</p>
                <span>$12/mo</span>
              </div>
              <div>
                <img src={pro} alt="pro" />
                <p>Pro</p>
                <span>$15/mo</span>
              </div>
            </div>
            <div>
              <span>Monthly</span>
              <button type="radio" />
              <button type="radio" />
              <span>Yearly</span>
            </div>
          </div>
          <div className={styles.beneath}>
            <span>Go back</span>
            <span className={styles.nextstep}>Next Step</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form2;

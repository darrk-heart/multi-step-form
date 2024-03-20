import React from "react";
import styles from "./Form3.module.css";
import check from "../../assets/icon-checkmark.svg";

function Form3({ children }) {
  return (
    <>
      <div className={styles.background}>
        {children}
        <div className={styles.form3bg}>
          <div className={styles.maintext}>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
          </div>
          <div className={styles.main}>
            <div className={styles.selects}>
              <img
                src={check}
                alt="checkmar"
                style={{ backgroundColor: "blue" }}
              />
              <div className={styles.selectText}>
                <h4>Online service</h4>
                <p>Access to multiplayer games</p>
              </div>
              <p>+$1/mo</p>
            </div>
            <div className={styles.selects}>
              <img
                src={check}
                alt="checkmar"
                style={{ backgroundColor: "blue" }}
              />
              <div className={styles.selectText}>
                <h4>Larger storage</h4>
                <p>Extra 1TB of cloud save</p>
              </div>
              <p>+$2/mo</p>
            </div>
            <div className={styles.selects}>
              <img
                src={check}
                alt="checkmar"
                style={{ backgroundColor: "blue" }}
              />
              <div className={styles.selectText}>
                <h4>Cuztomizable profile</h4>
                <p>Custom theme on your profile</p>
              </div>
              <p>+$1/mo</p>
            </div>
          </div>
          <div className={styles.beneath}>
            <span>Go Back</span>
            <h6 className={styles.nextstep}>Next Step</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form3;

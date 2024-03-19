import React from "react";
import styles from "./Form1.module.css";

function Form1({ children }) {
  return (
    <>
      <div className={styles.background}>
        {children}
        <div>
          <div>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
          </div>
          <div>
            <div>
              <span>Name</span>
              <input placeholder="e.g. Prosper Paul" />
              <span>Email Address</span>
              <input placeholder="e.g. prosperpaul@gmail.com" />
              <span>Phone Number</span>
              <input placeholder="e.g. +1 234 567 890" />
            </div>
          </div>
          <div>Next Step</div>
        </div>
      </div>
    </>
  );
}

export default Form1;

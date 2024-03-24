import React from "react";
import Heading from "../Heading/Heading";
import styles from "./Form4.module.css";

function Form4() {
  return (
    <>
      <div className={styles.background}>
        <Heading bg4="#bde3ff" color4="blue" border4="#bde3ff" />
        <div className={styles.form1bg}>
          <div className={styles.maintext}>
            <h1>Finishing up</h1>
            <p>Double-check everything looks OK before confirming</p>
          </div>
          <div className={styles.main}>
            <div
              style={{
                backgroundColor: "#eeeeee",
                padding: "0 10px 20px 10px",
                borderRadius: "10px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Arcade (Monthly)</h5>
                  <span>Change</span>
                </div>
                <span>$9/mo</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Online service</span>
                <span>+$1/mo</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Larger storage</span>
                <span>+$2/mo</span>
              </div>
            </div>
            <div>
              {" "}
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>Total (per month)</span>
                <h4 style={{ color: "blue" }}>+$12/mo</h4>
              </div>
            </div>
          </div>
          <div className={styles.beneath}>
            <span>Go Back</span>
            <h6 className={styles.nextstep}>Confirm</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form4;

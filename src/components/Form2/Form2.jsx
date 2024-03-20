import React, { useState } from "react";
import styles from "./Form2.module.css";
import arcade from "../../assets/icon-arcade.svg";
import advance from "../../assets/icon-advanced.svg";
import pro from "../../assets/icon-pro.svg";

function Form2({ children }) {
  const [selectedOption, setSelectedOption] = useState("monthly");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

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
                <span>{selectedOption === "monthly" ? "$9/mo" : "$90/yr"}</span>
                <h6>{selectedOption === "yearly" ? "2 months free" : ""}</h6>
              </div>
              <div>
                <img src={advance} alt="advance" />
                <p>Advanced</p>
                <span>
                  {selectedOption === "monthly" ? "$12/mo" : "$120/yr"}
                </span>
                <h6>{selectedOption === "yearly" ? "2 months free" : ""}</h6>
              </div>
              <div>
                <img src={pro} alt="pro" />
                <p>Pro</p>
                <span>
                  {selectedOption === "monthly" ? "$15/mo" : "$150/yr"}
                </span>
                <h6>{selectedOption === "yearly" ? "2 months free" : ""}</h6>
              </div>
            </div>
            <div className={styles.input}>
              <span>Monthly</span>
              <div>
                <input
                  type="radio"
                  name="options"
                  value="monthly"
                  checked={selectedOption === "monthly"}
                  onChange={handleOptionChange}
                />
                <input
                  type="radio"
                  name="options"
                  value="yearly"
                  checked={selectedOption === "yearly"}
                  onChange={handleOptionChange}
                />
              </div>
              <span>Yearly</span>
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

export default Form2;

import React from "react";
import { useState } from "react";
import styles from "./../styles/mainBanner.module.css"

export const Votes = (props) => {

  const [selected, setSelected] = useState("");

  const handleChange = (option) => {
    setSelected(option); 
  };

  return (
    <div>
        <h4 className={styles.tranporttitle}>{"Voting".toUpperCase()}
            <img src="https://shop.erfanazadeh.com/image/health.png" alt="" />
        </h4>
        <div>
      <h3>Select up to options:</h3>
      <form>
            {props.options.map((option) => (
        <label key={option} style={{fontSize: "15px", padding: "5px"}} ><br />
          <input
            type="checkbox"
            checked={selected === option}
            onChange={() => handleChange(option)}
            style={{margin: "10px", padding: "5px", width: "15px",height: "15px"}}
          />
          {option}
        </label>
      ))}
      <br />
      <button type="submit" className={styles.submitvote}>submit</button>
</form>
    </div>

    </div>
  );
};

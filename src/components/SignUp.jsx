import React, { useState, useEffect } from "react";
import Header from "./header";
import styles from "./styles/signUp.module.css";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen((prev) => !prev);
    return () => {
      setIsOpen((prev) => !prev);
    };
  }, []);

  const [gender, setGender] = useState("");

  return (
    <>
      <Header open={isOpen} />
      <div className={styles.header} style={{marginTop: "100px"}}>
        <div className={styles.leftcontent}>
          <h3>Hello ,friend!</h3>
          <p>Lorem ipsum dolor sit amet. Libero, possimus.</p>
          <p>if you have an account so </p>
          <button>
            <Link to="/login"> login</Link>
          </button>
        </div>
        <form>
          <div className={styles.rightcontent}>
            <input type="text" placeholder="first name" />
            <input type="text" placeholder="last name" />

            <input type="date" id="birthday" />
            <br />

            <div className={styles.genderitem}>
              <lable className={styles.gendertitle}>Gender :</lable>
              <label>
                <input
                  type="radio"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
              <label>
                <input
                  type="radio"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  value="Other"
                  checked={gender === "Other"}
                  onChange={(e) => setGender(e.target.value)}
                />
                Other
              </label>
            </div>

            <input type="email" placeholder="Email" />
            <input type="number" placeholder="number" />
            <input type="password" placeholder="password" />
            <button type="submit" className={styles.submit}>sign in</button>
          </div>
        </form>
      </div>
    </>
  );
};

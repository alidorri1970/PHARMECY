import React, { useEffect, useState } from "react";
import Header from "./header";

import styles from "./../components/styles/Login.module.css";
import { Link } from "react-router-dom";

export default function LoginSignUp() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(prev => !prev); 
    return () => {
      setIsOpen(prev => !prev); 
    };
  }, []);

  return (
    <>
    <Header open={isOpen}/>
      <div>
        <div className={styles.box}>
          <div className={styles.container}>
            <h3 className={styles.title}>
              {"Log in with . . .".toUpperCase()}
            </h3>
            <span className={styles.titlebuttons}>
              <button>Google</button>
              <button>Apple</button>
            </span>
            <hr className={styles.line} />
            <p className={styles.or}>OR</p>
            <form>
              <span className={styles.inputs}>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Email Addres"
                />
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Password"
                />
              </span>
            </form>
            <h3 className={styles.forgetpass}>
              Forget<Link to="forget" className={styles.forgetpasslink}> password?</Link>
            </h3>
            <button type="submit"className={styles.loginbutton}>Log in</button>
            <h3 className={styles.signUp}>Dont have an account? <Link to="/signUp" className={styles.signUplink}>Sign Up</Link></h3>
          </div>
        </div>
      </div>
    </>
  );
}

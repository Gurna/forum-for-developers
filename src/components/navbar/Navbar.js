import React from 'react';
import styles from "./styles.module.css";
import logotypeForum from "../../assets/logotypeForum.png";
import login from "../../assets/login.png";
import signup from "../../assets/signup.png"

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div><img className={styles.logotype} src={logotypeForum.src}/></div>
        <div>
            <ul>
                <li>
                    <a href="/login">
                        <img className={styles.icon} src={login.src}/>
                        <div>Login</div>
                    </a>
                    </li>
                <li>
                <a href="/signUp">
                    <img className={styles.icon} src={signup.src}/>
                    <div>Signup</div>
                </a>
                </li>
               
            </ul>
        </div>
    </div>
  )
}

export default Navbar;
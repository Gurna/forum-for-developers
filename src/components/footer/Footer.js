import React from 'react';
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerLinks}>
            <ul>
                <li><a href="#">IT FORUM</a></li>
                    <li>Questions</li>
                    <li>Help</li>
            </ul>

            <ul>       
                <li><a href="#">COMPANY</a></li>
                    <li>About</li>
                    <li>Press</li>
                    <li>Legal</li>
                    <li>Privacy Policy</li>
                    <li>Terms of Service</li>
            </ul>
            <ul>
                <li><a href="#">STACK EXCHANGE NETWORK</a> </li>
                    <li>Technology</li>
                    <li>Culture & recreation</li>
                    <li>Science</li>
                    <li>API</li>
                    <li>Data</li>
            </ul>
        </div>
        <div className={styles.footerSocialMedia}>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Linkedin</li>
                <li>Instagram</li>
                <li>Blog</li>

            </ul>
        </div>
    </div>
  )
}

export default Footer;
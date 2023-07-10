import React, { useState } from 'react';
import axios from "axios";
import styles from "./styles.module.css";
import { useRouter } from 'next/router';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Login = () => {
    const router = useRouter();
    const [user_email, setUserEmail]= useState("");
    const [user_password, setUserPassword]= useState("");
    

    const LoginToPage = async()=>{
        const response= await axios.post("http://localhost:8080/login",
        {
            user_email:user_email,
            user_password:user_password,
        });

        console.log("response", response);
        router.push("/newQuestion"); 
    };
    
  return (
    <>
    <Navbar/>
    <div className={styles.loginForm}>
       
        <div>
            <input value={user_email} onChange={(user)=>setUserEmail(user.target.value)} placeholder="e-mail"/>
        </div>
        <div>
            <input type="password" value={user_password} onChange={(user)=>setUserPassword(user.target.value)} placeholder="password"/>
        </div>
        <div>
            <button type="submit" onClick={()=>LoginToPage()}>Login</button>
        </div>
        </div>
        <Footer/>
        </>
  )
}


export default Login;
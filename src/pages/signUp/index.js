import React, { useState } from 'react';
import axios from "axios";
import styles from "./styles.module.css";
import { useRouter } from 'next/router';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const SignUp = () => {
    const router = useRouter();
    const [user_name, setUserName]= useState("");
    const [user_email, setUserEmail]= useState("");
    const [user_password, setUserPassword]= useState("");
    const [user_photo, setUserPhoto]= useState("");
    const [user_position, setUserPosition]= useState("");

    const SignUpToPage = async()=>{
        const response= await axios.post("http://localhost:8080/signUP",
        {
            user_name: user_name,
            user_email:user_email,
            user_password:user_password,
            user_photo:user_photo,
            user_position:user_position
        });

        console.log("response", response);
        router.push("/newQuestion"); 
    };
    
  return (
    <>
    <Navbar/>
    <div className={styles.signUpForm}>
        <div>
            <input value={user_name} onChange={(user)=>setUserName(user.target.value)} placeholder="Your name"/>
        </div>
        <div>
            <input value={user_email} onChange={(user)=>setUserEmail(user.target.value)} placeholder="e-mail"/>
        </div>
        <div>
            <input type="password" value={user_password} onChange={(user)=>setUserPassword(user.target.value)} placeholder="password"/>
        </div>
        <div>
            <input value={user_photo} onChange={(user)=>setUserPhoto(user.target.value)} placeholder="Please insert your photo"/>
        </div>
        <div>
            <input value={user_position} onChange={(user)=>setUserPosition(user.target.value)} placeholder="Your recent position"/>
        </div>
        <div>
            <button type="submit" onClick={()=>SignUpToPage()}>Sign Up</button>
        </div>
        </div>
        <Footer/>
        </>
  )
}


export default SignUp;
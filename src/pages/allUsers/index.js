import React, { useState, useEffect } from 'react';
import axios from "axios";
import Navbar from '../../components/navbar/Navbar';
import Footer from "../../components/footer/Footer";
import UserCard from '../../components/userCard/userCard';
import styles from "./styles.module.css";


const AllUsers = () => {

  const [users, setUsers] = useState([]);

  const fetchAllUsers = async ()=>{

    try{
    const response = await axios.get("http://localhost:8080/users");
  

    const {data} = response
    
    setUsers(data.users)  //duomenys ideti i setQuestions kintamaji//
    }catch(err){
      console.log("error", err)
    }

    console.log('users', users);
  };

  useEffect(()=>{
    fetchAllUsers()
  },[]);
  
  return (
    <div>
      <Navbar/>
      <div className={styles.userWrapper}>
        {users.map((user)=>(
          <div key = {user._id}>
      <UserCard
      user_id={user._id}
      user_photo={user.user_photo}
      user_name={user.user_name}
      user_position={user.user_position} 
      /> 
      </div>  
      ))}
      </div>
      <Footer/>
    </div>
  )
}

export default AllUsers;
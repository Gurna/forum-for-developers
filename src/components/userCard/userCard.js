import React from 'react';
import styles from "./styles.module.css";

const UserCard = ({user_photo, user_name, user_position}) => {
  return (
    <div className={styles.userCardWrapper}>
        <div className={styles.photo}>
        <img src={user_photo}/>
        </div>
            
            
        <div className={styles.userInfo}>
            <div className={styles.userName}>{user_name}</div>
            <div>{user_position}</div>
        </div>
    </div>
  )
}

export default UserCard;
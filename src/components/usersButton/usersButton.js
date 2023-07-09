import React from "react";
import Link from "next/link";
import styles from "./styles.module.css";


const usersButton = () => {
  return (
    <>
    <Link href ={"/allUsers"}>
      
            <button className={styles.usersButton}>All users</button>
    </Link>
    <Link href ={"/newQuestion"}>
      
      <button className={styles.usersButton}>New Question</button>
</Link>
    </>
  )
}

export default usersButton;

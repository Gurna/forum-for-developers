import React from 'react';
import styles from "./styles.module.css";
import Link from 'next/link';


const QuestionCard = ({title, date, author, description, id}) => {
  return (
    <div className={styles.cardWrapper}>
      <Link className={styles.link} href={`/fullQuestion/${id}`}>
        <h2 className={styles.questionTitle}>{title}</h2>
        <div className={styles.cardCreation}>
        <div>{date}</div>
        <div>author: {author}</div>
        </div>
        <p>{description}</p>
        </Link>
    </div>
  )
}

export default QuestionCard;
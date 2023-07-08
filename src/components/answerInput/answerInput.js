import React, {useState} from 'react';
import styles from "./styles.module.css";
import axios from "axios";

const answerInput = () => {
const [answer_author, setAuthor]=useState("");
const [answer_date, setDate]=useState("");
const [answer_description,setAnswer]=useState("");
const [addedAnswer, setAddedAnswer]=useState(null);


const addNewAnswer = async()=>{
  const response = await axios.post("http://localhost:8080/answer",
    {answer_author: answer_author,
    answer_date: answer_date,
    answer_description: answer_description
    }
    );

    console.log("response", response);

    setAddedAnswer(response.data.answer);

    setTimeout(()=>{
        setAuthor("");
        setDate("");
        setAnswer("");
    }, 3000);
};

  return (

    <div className={styles.answerInputForm}>
   {addedAnswer && (
    <div className={styles.addedAnswer}>
        <hr></hr>
        <div className={styles.addedAnswerInfo}>
        <p>Author: {addedAnswer.answer.answer_author}</p>
        <p>Date: {addedAnswer.answer.answer_date}</p>
      </div>
      <p>Answer: {addedAnswer.answer.answer_description}</p>
      <hr></hr>
    </div>
  )}
        <div>
            <input value={answer_author} onChange={(answer)=>setAuthor(answer.target.value)} placeholder = "Name"/>
        </div>
        <div>
            <input type="date" value={answer_date} onChange={(answer)=>setDate(answer.target.value)} placeholder = "date"/>
        </div>
        <div>
            <input type="text" value={answer_description} onChange={(answer)=>setAnswer(answer.target.value)} placeholder = "your answer" minLength="2" maxLength="350" size="10"/>
        </div>
        <div>
        <button onClick={()=>addNewAnswer()}>Add answer</button>
        </div>
    </div>
  )
};




export default answerInput;
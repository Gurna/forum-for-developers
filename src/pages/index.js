import React, { useState, useEffect } from 'react';
import axios from "axios";
import QuestionCard from "../components/questionCard";
import styles from "./styles.module.css";



const MainPage = () => {

  const [questions, setQuestions] = useState([]);

  const fetchAllQuestions = async ()=>{

    const response = await axios.get("http://localhost:8080/questions");
    const {data} = response
    
    setQuestions(data.question)  //duomenys ideti i setQuestions kintamaji//
  };

  useEffect(()=>{
    fetchAllQuestions()
  },[]);
  
  
  return (
    <div>
      <div className={styles.questionWrapper}>
        {questions.map((question)=>(
      <QuestionCard
      id={question._id}
      title={question.title}
      date={question.date} 
      author={question.author} 
      description= {question.description}
      />      
      ))}
      </div>
    </div>
  )
}

export default MainPage;

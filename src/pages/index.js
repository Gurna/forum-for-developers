import React, { useState, useEffect } from 'react';
import axios from "axios";
import QuestionCard from "../components/questionCard";
import styles from "./styles.module.css";
import Navbar from '../components/navbar/Navbar';
import Footer from "../components/footer/Footer";
import UsersButton from "../components/usersButton/usersButton";


const MainPage = () => {

  const [questions, setQuestions] = useState([]);

  const fetchAllQuestions = async ()=>{

    try{
    const response = await axios.get("http://localhost:8080/questions");
    const {data} = response
    
    setQuestions(data.question)  //duomenys ideti i setQuestions kintamaji//
    }catch(err){
      console.log("error", err)
    }
  };

  useEffect(()=>{
    fetchAllQuestions()
  },[]);
  
  
  return (
    <>
     <Navbar/>
     <div className={styles.mainPageWrapper}>
    <div className={styles.linkButtons}>
      <UsersButton/>
      </div>
      <div className={styles.questionWrapper}>
        {questions.map((question)=>(
          <div key = {question._id}>
      <QuestionCard
      id={question._id}
      title={question.title}
      date={question.date} 
      author={question.author} 
      description= {question.description}
      /> 
      </div>  
      ))}
      </div> 
      </div> 
    <Footer/>
    </>
  )
}

export default MainPage;

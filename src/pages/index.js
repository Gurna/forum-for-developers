
import React, { useState, useEffect } from 'react';
import axios from "axios";

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
      <div>{questions.map((question)=>(
      <div>{question.title}</div>
      ))}
      </div>
    </div>
  )
}

export default MainPage;

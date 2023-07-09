import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import styles from "./styles.module.css";
import AnswerInput from '../../components/answerInput/answerInput';
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const FullQuestion = () => {
    const [question, setQuestionCard] = useState();
    const router = useRouter();
    const fetchEvent = async ()=>{
        const response = await axios.post(`http://localhost:8080/question/${router.query.id}`, 
        {answer_id:"xxxx"});

        const {data}= response;
        setQuestionCard(data.question);

        console.log("response", response);
    };

   

    useEffect(()=>{
      router.query.id && fetchEvent();
    },[router.query.id]);  //useEffect ivyksta du kartus: pirma patikrina, ar reiksme egzistuoja, antra:ideda//

  return (
    <>
    <Navbar/>
    <div className={styles.pageWrapper}>
        {question &&
        <div className={styles.fullQuestion}>
    <h2 className={styles.title}>{question.title}</h2>
    <div>{question.date}</div>
    <div>{question.author}</div>
    <div>{question.description}</div>
    <hr className={styles.line}></hr>
    <div className={styles.answersWrapper}>
        <h4>{question.answers.length}</h4>
        <AnswerInput/>
    </div>
    </div>
     }
    </div>
    <Footer/>
    </>
  )
}

export default FullQuestion;
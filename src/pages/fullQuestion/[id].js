import React, {useState, useEffect} from 'react';
import axios from "axios";
import { useRouter } from 'next/router';

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
    <div>{question && 
    <h2>{question.title}</h2> }
    </div>
  )
}

export default FullQuestion;
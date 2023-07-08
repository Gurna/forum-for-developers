import React, {useState} from 'react';
import axios from "axios";
import styles from "./styles.module.css";
import { useRouter } from 'next/router';


const newQuestion = () => {

    const router = useRouter();
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [author, setAuthor] = useState("");
    const [description, setDescription] = useState("");

    const addNewQuestion = async ()=>{
      const response= await axios.post("http://localhost:8080/question",
        {title: title,
            date: date,
            author: author,
            description: description
        });

        console.log("response", response);
        router.push("/"); //nuveda i pagrindini puslapi//
    };


  return (
    <div className={styles.newQuestionForm}>
        <div>
            <input value={title} onChange={(question)=>setTitle(question.target.value)} placeholder="title"/>
        </div>
        <div>
            <input type="date" value={date} onChange={(question)=>setDate(question.target.value)} placeholder="date"/>
        </div>
        <div>
            <input value={author} onChange={(question)=>setAuthor(question.target.value)} placeholder="author"/>
        </div>
        <div>
            <input value={description} onChange={(question)=>setDescription(question.target.value)} placeholder="your question"/>
        </div>
        <div>
            <button type="submit" onClick={()=>addNewQuestion()}>Add new question</button>
        </div>



        </div>
  )
}

export default newQuestion;
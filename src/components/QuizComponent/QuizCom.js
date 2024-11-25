import React, { useRef, useState } from "react";
import "./Quiz.css";
import { quizMockData } from "../../assets/quizMockData";

const QuizCom = () => {
  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(quizMockData[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  console.log(score,"This is score")

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_Arry = [option1, option2, option3, option4];

  const checkAnswer = (e, ans) => {
    if (lock === false) {
      
      if (question?.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev=> prev+1)
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_Arry[question?.ans - 1].current.classList.add("correct");
      }
      if (index === quizMockData.length - 1) {
        setResult(true);
        return 0;
      }
    }
  };

  const next = () => {
    if (lock === true) {
      setIndex(++index);
      setQuestion(quizMockData[index]);
      setLock(false);
      option_Arry.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      });
    }
  };

  const reset = () =>{
    setIndex(0)
    setScore(0)
    setQuestion(quizMockData[0])
    setLock(false)
    setResult(false)
  }

  return (
    <div className="container">
      <h1>quiz App</h1>
      <hr />

      {result ? <><h2>You Scored {score} Out Of { quizMockData.length} </h2>
      <button onClick={reset} >Reset</button> </> : <>  <h2>
        {index + 1} . {question?.question}
      </h2>
      <ul>
        <li
          ref={option1}
          onClick={(e) => {
            checkAnswer(e, 1);
          }}
        >
          {question?.option1}
        </li>
        <li
          ref={option2}
          onClick={(e) => {
            checkAnswer(e, 2);
          }}
        >
          {question?.option2}
        </li>
        <li
          ref={option3}
          onClick={(e) => {
            checkAnswer(e, 3);
          }}
        >
          {question?.option3}
        </li>
        <li
          ref={option4}
          onClick={(e) => {
            checkAnswer(e, 4);
          }}
        >
          {question?.option4}
        </li>
      </ul>
      <button onClick={() => next()}>Next</button>
      <div className="index">
        {index + 1} of {quizMockData.length} question
      </div></>}

      
    </div>
  );
};

export default QuizCom;

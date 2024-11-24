import React from 'react'
import "./Quiz.css"


const QuizCom = () => {
  return (
    <div className='container'>
  <h1>quiz</h1>
  <hr/>
  <h2>1. what is your name</h2>
  <ul>
    <li>Rajat</li>
    <li>Ritika</li>
    <li>harshit</li>
    <li>sanjil</li>
  </ul>
  <button>Next</button>
  <div className='index'>1 of 5 question</div>
    </div>
  )
}

export default QuizCom

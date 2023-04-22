import React, { useState } from 'react'
import QuizData from '../Data/QuizData'
import TotelResult from './TotelResult'


const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [selectQuestion, setSelectQuestion] = useState(0)
  const [showScore, setShowScore] = useState(false)


  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectQuestion(0)
    } else {
      setShowScore(true)

    }
  }

  const updateScore = () => {
    if (selectQuestion === QuizData[currentQuestion].answer)
      setScore(score + 1)
    console.log("scoreeeeeeeeeeeeeee", score)
  }

  const ResetAll = () => {

    setShowScore(false);
    setCurrentQuestion(0);
    setSelectQuestion(0);
  }

  return (
    <>
      <p className='heading-txt'>QUIZ_APP</p>
      <div className='container'>
        {showScore ? (<TotelResult score={score} totelScore={QuizData.length} tryAgain={ResetAll} />) : (
          <>

            <div className='question'>
              <span id="question-number">{currentQuestion + 1}</span>
              <span id="question-number">{QuizData[currentQuestion].question}</span>
            </div>
            <div className='option-container'>
              {QuizData[currentQuestion].options.map((option, index) => {
                return (
                  <button
                    className={`option-btn ${selectQuestion === index + 1 ? "checked" : ""}`}
                    onClick={() => setSelectQuestion(index + 1)}
                    key={index}
                  >
                    {option}
                  </button>
                )
              })}
            </div>
            <input
              type="button"
              value="Next"
              id="next-button"
              onClick={changeQuestion}
            />
          </>)}
      </div>
    </>
  )
}

export default Quiz
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  //here are my 3 questions
  const questions = [
    {
      question: "Which of the following is not involved in front end development?",
      options: ["A. HTML", "B. CSS", "C. JavaScript", "D. SQL"],
      answer: "D. SQL"
    },
    {
      question: "What is GitHub?",
      options: ["A. Version Control System", "B. Framework", "C. Database", "D. Package Manager"],
      answer: "A. Version Control System"
    },
    {
      question: "Amongst which of the following protocols is used to exchange the data between client and server?",
      options: ["A. HTTP", "B. TCP/IP", "C. SMTP", "D. FTP"],
      answer: "A. HTTP"
    },
  ];

  const handleChange = (e, index) => {
    setAnswers({ ...answers, [index]: e.target.value });
  };

  //makes sure we are selecting correct answer
  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswers = questions.filter((q, index) => answers[index] === q.answer);
    
    //grants access if all answers are correct
    if (correctAnswers.length >= 2) {
      navigate('/info'); 
    } else {
      alert('You did not pass the quiz, please try again');
    }
  };

  return (
    <div>
      <h1>Take Quiz to Qualify</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q, index) => (
          <div key={index}>
            <p>{q.question}</p>
            {q.options.map((option, i) => (
              <label key={i}>
                <input
                  type="radio"
                  name={`question${index}`}
                  value={option}
                  onChange={(e) => handleChange(e, index)}
                />
                {option}
              </label>
            ))}
          </div>
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
      <p style={{ marginTop: '20px', fontStyle: 'italic', fontSize: '0.9em' }}>
        Questions used from <a href="https://www.includehelp.com/mcq/full-stack-development-multiple-choice-questions-mcqs.aspx" target="_blank" rel="noopener noreferrer">https://www.includehelp.com/mcq/full-stack-development-multiple-choice-questions-mcqs.aspx</a>
      </p>
    </div>
  );
};

export default QuizPage;

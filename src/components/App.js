import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('http://localhost:4000/questions')
      .then(response => response.json())
      .then(fetchedQuestion => {
        setQuestions(fetchedQuestion)
      })
  }, [])

  function handleNewQuestion(newQuestion) {
    const questionsWithNew = [...questions, newQuestion];
    setQuestions(questionsWithNew)
  }

  function handleDeleteQuestion(deletedQuestion) {
    const undeletedQuestions = questions.filter(question => question.id !== deletedQuestion.id)
    setQuestions(undeletedQuestions)
  }

  function handleChangeAnswer(updatedQuestion) {
    const updatedQuestions = questions.map(question => {
      if (question.id === updatedQuestion.id) {
        return updatedQuestion;
      } else {
        return question;
      }
    })
    setQuestions(updatedQuestions)
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onSubmitNewQuestion={handleNewQuestion}/> : <QuestionList questions={questions} onDeleteQuestion={handleDeleteQuestion} onChangeAnswer={handleChangeAnswer} />}
    </main>
  );
}

export default App;

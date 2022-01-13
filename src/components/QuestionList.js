import React from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({ questions, onDeleteQuestion, onChangeAnswer }) {
  const questionLis = questions.map(question => {
    return <QuestionItem key={question.id} question={question} onDeleteQuestion={onDeleteQuestion} onChangeAnswer={onChangeAnswer}/>
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questionLis}
      </ul>
    </section>
  );
}

export default QuestionList;

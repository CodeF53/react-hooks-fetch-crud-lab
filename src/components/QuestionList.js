import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({questions, yeetQuestion, changeQuestion}) {
  const questionNodes = questions.map((question)=>{
    return (
      <QuestionItem question={question} yeetQuestion={yeetQuestion} key={question.id} changeQuestion={changeQuestion}/>
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionNodes}</ul>
    </section>
  );
}

export default QuestionList;

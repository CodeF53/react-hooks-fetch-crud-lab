import React from "react";

function QuestionItem({ question, yeetQuestion, changeQuestion }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleYeet() {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE"
    }).then(r=>r.json()).then(()=>{
      yeetQuestion(question)
    })
  }

  function handleUpdateAnswer(event) {
    console.log(parseInt(event.target.value))
    const newAnswerIndex = parseInt(event.target.value);
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({"correctIndex":newAnswerIndex})
    }).then((r)=>r.json()).then((data)=>{
      // update the thing in local context
      changeQuestion(data)
    })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange={handleUpdateAnswer}>{options}</select>
      </label>
      <button onClick={handleYeet}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;

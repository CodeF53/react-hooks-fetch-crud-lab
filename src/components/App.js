import React, { useEffect, useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  const [questions, setQuestions] = useState([])

  // get our questions from the server when we start
  useEffect(() => { fetch("http://localhost:4000/questions").then(r=>r.json()).then((data)=>{
      setQuestions(data)
    })
  }, [])

  // 
  function addQuestion(newQuestion) {
    setQuestions([...questions, newQuestion])
  }

  function deleteQuestion(yeetQuestion) {
    setQuestions(questions.filter((q)=>q.id!==yeetQuestion.id))
  }

  function changeQuestion(newQuestion) {
    setQuestions(questions.map((q)=>q.id===newQuestion.id? newQuestion : q))
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm addQuestion={addQuestion}/> : <QuestionList questions={questions} yeetQuestion={deleteQuestion} changeQuestion={changeQuestion}/>}
    </main>
  );
}

export default App;

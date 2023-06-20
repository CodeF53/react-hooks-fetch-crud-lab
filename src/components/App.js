import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
<<<<<<< HEAD
  const [questions,setQuestions]=useState([])

  const URL="http://localhost:4000/questions"

  useEffect(()=>{
    loadQuestions(URL)
  },[])

  function loadQuestions(URL){
    fetch(URL)
    .then(res=>res.json())
    .then(questions=>setQuestions(questions))
  }

  function addQuestion(question){
    fetch(URL,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(question)
    })
    .then(res=>res.json())
    .then(newQuestion=>setQuestions([...questions,newQuestion]))
  }
=======
>>>>>>> parent of b343ffa (code)

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;

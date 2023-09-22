import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';


function App() {

    const [result, setResult] = useState([]);

    function downloadQuestion(){
     fetch('https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2')
     .then(response => {
      return response.json()
    })
    .then(data => {
      setResult(data)
    })
  }

  useEffect(()=>{
    downloadQuestion();
    
  }, [])
  console.log("result",result);

  
  return (
    <>
      <ul>
          {result.map(q => (
            <h1>{q.ChapterID} </h1>
          ))}
        </ul>
    </>
  )
}

export default App

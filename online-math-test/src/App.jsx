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

    // async function downloadQuestion(){
    // const response = await axios.get('https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=AreaUnderTheCurve_2'); // this downloads list of 20 pokemons

    // setResult(response.data) // we get the array
    // // console.log(result);
    }

  useEffect(()=>{
    downloadQuestion();
    
  }, [])
  console.log("result",result);

  
  return (
    <>
      <ul>
          {result.map(q => (
            <li key={q.ChapterID}>{q.ChapterID} </li>
          ))}
        </ul>
    </>
  )
}

export default App

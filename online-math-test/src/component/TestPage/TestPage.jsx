import { useEffect, useState } from "react";
import { MathComponent } from "mathjax-react";
import LandingPage from "../LandingPage/LandingPage";

function TestPage(props){
    const [result, setResult] = useState([]);

    function downloadQuestion(){
     fetch("https://0h8nti4f08.execute-api.ap-northeast-1.amazonaws.com/getQuestionDetails/getquestiondetails?QuestionID=BinomialTheorem_24")
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
  // console.log("result",props);

  
  return (
    <>
      <ul>
        {result.map(q => (
          <li key={q.ChapterID}>{q.Qusestion} 
            <MathComponent tex={q.Question} />
          </li>
        ))}
      </ul>
    </>
  )
}
export default TestPage;
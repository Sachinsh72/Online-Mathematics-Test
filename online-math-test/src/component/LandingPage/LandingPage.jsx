import React, { useState,  } from 'react';
import { Link } from 'react-router-dom';
import TestPage from '../TestPage/TestPage';
import './LandingPage.css'

const questions = [
  { id: 0, text: "AreaUnderTheCurve_21", isCorrect: false },
  { id: 1, text: "BinomialTheorem_13", isCorrect: false },
  { id: 2, text: "BinomialTheorem_24", isCorrect: false },
  { id: 3, text: "AreaUnderTheCurve_15", isCorrect: true },
  { id: 4, text: "AreaUnderTheCurve_2", isCorrect: false },
  { id: 5, text: "BinomialTheorem_3", isCorrect: false },
  { id: 6, text: "BinomialTheorem_4", isCorrect: false },
  { id: 7, text: "AreaUnderTheCurve_5", isCorrect: true }
];

function LandingPage() {
  const [inputText, setInputText] = useState("");
  const [checkedItems, setCheckedItems] = useState({});
  // const [nextPage, setNextPage] = useState(false)

  const handleCheckboxChange = (text) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [text]: !prevCheckedItems[text],
    })); 
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  }; 

  const handleSubmit = () => {
    let questionArray =  Object.keys(checkedItems);
    console.log(questionArray);
    // setNextPage(true)
  };

  // console.log(checkedItems);

  // const newArr = {
  //   name: "sachin"
  // }


  return (
    <div className='main-container'>
        <div className='name'>
            <h2>UserName:</h2> 
            <input type="text" onChange={handleChange} value={inputText} placeholder='Write your name...'/>
        </div>
        
        <h2>Select your test based on below topics</h2>
        <ul>
        {questions.map((option) => (
            <li key={option.id}>
              <input
                  type="checkbox"
                  checked={checkedItems[option.text] || false}
                  onChange={() => handleCheckboxChange(option.text)}
              />
              <p>{option.text}  </p> <br />
            </li>
        ))}
        </ul>

        <Link to="/checkedItems"> <button type="submit" onClick={handleSubmit}>Start Test </button></Link>

      {/* <NextQues/>  */}

    </div>
  );
}

export  default LandingPage
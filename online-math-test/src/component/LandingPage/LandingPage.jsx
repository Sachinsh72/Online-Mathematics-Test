import React, { useState,  } from 'react';

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

  const handleCheckboxChange = (text) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [text]: !prevCheckedItems[text],
    })); 
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    let questionArray =  Object.keys(checkedItems);
    console.log(questionArray);
    
    
  };
  console.log(checkedItems);

  return (
    <>
        <div>
            <h2>Name:</h2> 
            <input type="text" onChange={handleChange} value={inputText} />
        </div>
        
        <ul>
        {questions.map((option) => (
            <li key={option.id}>
              <input
                  type="checkbox"
                  checked={checkedItems[option.text] || false}
                  onChange={() => handleCheckboxChange(option.text)}
              />
              {option.text} <br />
            
            </li>
        ))}
        </ul>
        
        <button type="submit" onClick={handleSubmit}>Start Text </button>
    </>
  );
}

export default LandingPage;
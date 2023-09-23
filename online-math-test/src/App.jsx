import axios from 'axios'
import './App.css'
import { useEffect, useState } from 'react';
import Question from './component/TestPage/TestPage';
import LandingPage from './component/LandingPage/LandingPage';


function App() {
  return (
    <>
      <Question/>
      <LandingPage/>
    </>
  )
}

export default App

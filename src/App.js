import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const htmlEl = document.querySelector('html');

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      htmlEl.setAttribute('data-bs-theme','dark');
    }
    else {
      setMode('light');
      htmlEl.setAttribute('data-bs-theme','light');
    }
  };

  return (
    <>

      {/* Navbar is component , title and about is props*/}
      <Navbar title="TextUtils" about="About Us" mode={ mode } toggleMode={ toggleMode }/>

      <TextForm heading="Enter the text to analyze below" />

      {/* <About/> */}

    </>
  );
}

export default App;

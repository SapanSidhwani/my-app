import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const htmlEl = document.querySelector('html');

  const showAlert = (msg, typ) => {
    setAlert({
      message: msg,
      type: typ
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      htmlEl.setAttribute('data-bs-theme','dark');
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      htmlEl.setAttribute('data-bs-theme','light');
      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>

      {/* Navbar is component , title and about is props*/}
      <Navbar title="TextUtils" about="About Us" mode={ mode } toggleMode={ toggleMode }/>

      <Alert alert={ alert }/>

      <TextForm showAlert={ showAlert } heading="Enter the text to analyze below" />

      {/* <About/> */}

    </>
  );
}

export default App;

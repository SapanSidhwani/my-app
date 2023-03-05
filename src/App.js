// npm i react-router-dom
import './App.css';
import React, { useState } from 'react';
import TextForm from './components/TextForm';
import RootLayout from './Routes/RootLayout';
import {
  createBrowserRouter,
  RouterProvider,
  // Route,
  // Link,
} from "react-router-dom";
import About from './components/About';

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

 
  // setInterval(() => {
  //   document.title = "Install now";
  // }, 1500);

  // setInterval(() => {
  //   document.title = `TextUtils - ${ mode }`;
  // }, 2500);

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

  const router = createBrowserRouter([

    {
      path: "/",
      element: <RootLayout alert={ alert } title="TextUtils" about="About Us" mode={ mode } toggleMode={ toggleMode } />,
      children:[
      
        {
          path:'/',
          element: <TextForm showAlert={ showAlert } heading="Enter the text to analyze below" />
        },
        {
          path: "/about",
          element: <About/> 
        }
      ]
    }
  
    
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

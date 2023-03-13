import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
// import About from './components/About';

// import{
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom" ;

function App() {
  const [mode, setMode]= useState('light');
  const[alert, setAlert]= useState(null);

  const showAlert= (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  const changeMode= ()=>{
    if(mode === 'light'){
     setMode('dark');
     document.body.style.backgroundColor='#121735';
     showAlert("Enabled dark mode", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Disabled dark mode", "success");
    }
  }
  return (
    <>
    {/* <Router> */}
      

      <Navbar title="TextUtils" mode={mode} toggleMode={changeMode} aboutText={"About"}/>
      <Alert alert={alert}/>
      <div className="container my-3">
               
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About/>} > */}
            {/* </Route> */}

            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />}> */}
            <TextForm showAlert={showAlert} heading="Enter your text to Analyse below" mode={mode} />
            {/* </Route> */}
          {/* </Routes> */}
      </div>


      {/* </Router> */}

    </>
  );
}

export default App;

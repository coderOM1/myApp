import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import React, {useState} from 'react';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState('light');
  const [alert, sertAlert] = useState(null);

  const showAlert = (message, type)=>
  {
    sertAlert({msg:message, type:type})
    setTimeout(() => {
      sertAlert(null);
    }, 2000);
  }
 
  const toggleMode = ()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark Mode", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light Mode", "success");
    }
  }
  return (
    <>
    <Navbar title="TextApp" mode={mode} aboutText="About" toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Form showAlert={showAlert} heading="Enter the text that you want"/>
    </div>

    </>
  );
}

export default App;

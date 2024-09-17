import React, { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Text from './component/Text';
import Form from './component/form';
import Alert from './component/Alert';
function App() {
  const [mode, setMode] = useState('light');   //*wether dark mode is enbled or not 

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {

      setAlert(null);
    }, 1500)

  }

  const toggleMode = () => {
    if (mode === 'light') {

      setMode('dark');
      document.body.style.backgroundColor = 'gray';
      showAlert("Dark mod has been enable", "success")
      document.title = 'converte-dark mode';
      // setInterval(() => {

      //   document.title='dark mode is amozing';
      // }, 2000);
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode has been enable", "success")
      document.title = 'converte-light mode';
      // setInterval(() => {

      //    document.title='light mode is amozing';
      // }, 1500);
    }
  }
  return (
    <>
      <div >
        <Navbar title="CONVETER" link="
      Go there" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Text />
        <Form showAlert={showAlert} mode={mode} />

      </div>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './styles.css';
import Main from './main.js';
import Nav from './nav.js';
import React from 'react'

function App() {
  const [dm,setDm]=React.useState(false);
  function modeToggler(){
    setDm((prev)=>{
      return !prev;
    })
  }
  return (
    <div>
      <Nav darkMode={dm} toggleDarkMode={modeToggler}/>
      <Main darkMode={dm}/>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Router>
        <Home /> 
      </Router>
    
      
    </div>
  );
}

export default App;

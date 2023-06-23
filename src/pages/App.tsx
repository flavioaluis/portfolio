import React from 'react';

import Home from '../components/Home';
import style from './App.module.scss';
import BarraLateral from '../components/BarraLateral';


function App() {
  return (
    <div className={style.AppStyle}>
    <BarraLateral  />
    <Home /> 
      
    </div>
  );
}

export default App;


import './App.css'
import React, {useState} from 'react'
import Login from './component/Loginform'
import  DarkModeToggle  from './component/Darkmode'

function App() {
  return (
    <div>
      <Login />
      <DarkModeToggle/>
    </div>
  );
};
export default App

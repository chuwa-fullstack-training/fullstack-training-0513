import { useState } from 'react'
import './App.css'
import StatusBar from './StatusBar'
import MainPart from './MainPart';
import BottomPart from './BottomPart';

function App() {

  const [ statustext,setStatustext ] = useState<string>("StatusBar"); 
  const [ mainpartdata ] = useState<string[]>([
    "a", "b", "c", "d", "1", "2", "3", "4", "A", "B", "C", "D", "!", "@", "#", "$"
  ]);

  const [ bottomdata ] = useState<string[]>([
    "b1", "b2", "b3", "b4"
  ]);

  const mainbuttonClicked = (idx: number) => {
    setStatustext(mainpartdata[idx]);
  }

  const bottombuttonClicked = (idx: number) => {
    setStatustext(bottomdata[idx]);
  }
  return (
    <>
    <div id="main_container">
      <StatusBar text={ statustext } />
      <MainPart data={ mainpartdata } buttonClicked={ mainbuttonClicked }/>
    </div>
    <div id='bottom_container'>
      <BottomPart data={ bottomdata } buttonClicked={ bottombuttonClicked }/>
    </div>
    </>
  )
}

export default App

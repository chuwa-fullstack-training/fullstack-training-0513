import { useState } from 'react';
import './App.css'
import Comp from './Comp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ControlBar from './ControlBar';

export type CNACItemType = {
  name: string,
  color: string
}

function App() {
  const componentNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
  const [componentNamesAndColor, setComponentNamesAndColor] = useState<CNACItemType[]>(
    componentNames.map(value => { return { name: value, color: "white" }})
  );
  

  const nameChangeHandler = (newname: string, idx: number) => {
    setComponentNamesAndColor((prev) => {
      const tmp = [...prev]; 
      tmp[idx].name = newname; 
      return tmp;
    })
  }

  const changeDataColor = (color: string, index: number) => {
    setComponentNamesAndColor((prev) => {
      const tmp = [...prev];
      tmp[index].color = color;
      return tmp;
    })
  }

  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route path="/:id" element={ 
            <div>
              <ControlBar componentNamesAndColor={ componentNamesAndColor } changeDataColor={ changeDataColor }/>
              <Comp datas={ componentNamesAndColor } nameChangeHandler={ nameChangeHandler }/> 
            </div>
          } />
          
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App

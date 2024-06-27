import { useState } from 'react';
import './App.css'
import Comp from './Comp';
import Dropdown, { DropdownItemType } from './Dropdown';

type CNACItemType = {
  name: string,
  color: string
}

function App() {
  const componentNames = ["first", "second", "third", "fourth", "fifth", "sixth"];
  const [componentNamesAndColor, setComponentNamesAndColor] = useState<CNACItemType[]>(
    componentNames.map(value => { return { name: value, color: "white" }})
  );
  const [selected, setSelected] = useState<number>(0);
  const select_items: DropdownItemType[] = componentNamesAndColor.map((value, index) => {
    return {
      name: value.name,
      clickHandler: () => {
        // console.log(`${value} at index ${index} clicked!`);
        setSelected(index);
      }
    }
  })
  const colorNames: string[] = ["red", "blue", "green", "yellow", "purple", 
        "orange", "pink", "brown", "gray", "cyan", "white"];
  const color_items: DropdownItemType[] = colorNames.map((value) => {
    return {
      name: value,
      clickHandler: () => {
        // console.log(`color ${value} clicked!`);
        setComponentNamesAndColor((prev) => {
          const temp = [...prev];
          temp[selected].color = value; 
          return temp; 
        })
      }
    }
  })
  return (
    <div>
      <div className='control_bar'> 
        <Dropdown name='' items={ select_items } selected={ selected }/>
        <Dropdown name='Choose color' items={ color_items } selected={ 0 }/>
      </div>
      <div className='comp_grid'>
        {
          componentNamesAndColor.map((value, index) => {
            return <Comp key={index} id={index} name={value.name} 
                color={value.color} nameChangeHandler={(newname) => {
                  setComponentNamesAndColor((prev) => {
                    const tmp = [...prev]; 
                    tmp[index].name = newname; 
                    return tmp;
                  })
                }}/>
          })
        }
      </div>
      
    </div>
  )
}

export default App

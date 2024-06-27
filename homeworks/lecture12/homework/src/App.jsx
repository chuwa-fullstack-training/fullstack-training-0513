import { useState } from 'react'
import './App.css'
import { Hw1 } from './screens/Hw1'
import { LayoutScreen } from './screens/LayoutScreen'
import { Counter } from './components/Counter'
import { Converter } from './components/Converter'
function App() {

  return (
    // <>
    //   <LayoutScreen />
    // </>
    // <>
    // <Hw1 />
    // </>
    <>
    <Counter />
    <p></p>
    <Converter />
    </>
  )
}

export default App

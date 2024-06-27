import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HW from './components/hw2';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HW />}></Route>
        <Route path='/:id' element={<HW />}></Route>
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

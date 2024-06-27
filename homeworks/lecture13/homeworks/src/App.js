import './App.css';
import { Todo } from './components/Todo';
import { PhoneScreen } from './components/PhoneScreen';

function App() {
  return (
    <>
    <header></header>
    <div className="App">
      <Todo />
      <PhoneScreen />
    </div>
    <footer></footer>
    </>
  );
}

export default App;

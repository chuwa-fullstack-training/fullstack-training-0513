
import Todo from './Todo';
import { Provider } from 'react-redux';
import store from './store/index.js'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>

  );
}

export default App;

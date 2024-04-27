import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import Todoform from './components/Todoform';

//wrapping application


function App() {
  return (
    <div className="App">
      <Header/>
      <Todoform/>
    </div>
  );
}

export default App;

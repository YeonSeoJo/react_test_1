import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './counter';

function App() {
  let name = "조연서"

  return (
    <div className="App">
      <MyHeader/>
      <Counter />
    </div>
  );
}

export default App;

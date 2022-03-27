import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';

function App() {
  let name = "조연서"

  return (
    <div className="App">
      <MyHeader/>
          <h2>Hello {name} It's React :)</h2>
          <b id="bold_text">React.js</b>
      <MyFooter/>
    </div>
  );
}

export default App;

import './App.css';
import MyHeader from './MyHeader';
import MyFooter from './MyFooter';
import Counter from './Counter.js';
import OddEvenResult from './OddEvenResult';
import Container from './Container';


function App() {
  
  const conuterProps = {
    a : 1,
    b : 2,
    c : 3,
    initialValue: 2
  }
  return (
    <Container>
    <div className="App">
      <MyHeader />
      <Counter {...conuterProps}/>
      <OddEvenResult />
    </div>
    </Container>
  );
}

export default App;

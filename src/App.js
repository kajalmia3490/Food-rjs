import './App.css';
import Container1 from './components/container/container1/Container1';
import Container2 from './components/container/container2/Container2';
import Header from './components/header/Header';
function App() {
  return (
    <div className="App font-mono">
      <Header cart='43' />
      <Container1 />
      <Container2 />
    </div>
  );
}

export default App;

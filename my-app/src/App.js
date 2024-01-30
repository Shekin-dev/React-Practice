import './App.css';
import Navbar  from './Navbar';
import Card from "./card";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Card title="Card 1" content="This is the content of Card 1." ></Card>
      <Card title="Card 2" content="This is the content of Card 2." ></Card>
    </div>
   
  );
}

export default App;

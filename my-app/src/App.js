import './App.css';
import Navbar  from './Navbar';
import Card from "./card";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className= "cards">
      <Card title="Card 1" content="This is the content of Card 1." ></Card>
      <Card title="Card 2" content="This is the content of Card 2." ></Card>
      <Card title="Card 3" content="This is the content of Card 3." ></Card>
      <Card title="Card 4" content="This is the content of Card 4." ></Card>
      </div>  
    </div>
   
  );
}

export default App;

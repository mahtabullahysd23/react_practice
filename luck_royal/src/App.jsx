import './App.css';
import { useState } from 'react';
import ParentComponent from './components/ParentComponents';

function App() {
  const [appSelectedChild, setAppSelectedChild] = useState("Test Your Luck");

  const handleChildSelected = (child) => {
    setAppSelectedChild(child);
  }
  return (
    <div>
      <h1 style={{
        textAlign: "center",
      }}>{appSelectedChild}</h1>
      <ParentComponent onChildSelected={handleChildSelected} />
    </div>
  );
}

export default App;

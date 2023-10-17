import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { Chai } from './components/Chai';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Chai aur React with | HC</h1>
      <Chai />
    </>
  );
}

export default App;

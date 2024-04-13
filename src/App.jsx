import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import Data from './data/data.js';
import MediaCard from './components/employee_Card.jsx';

function App() {
  const [count, setCount] = useState(0)


  console.log(Data);

  return (
   <MediaCard />
  )
}

export default App

// App.jsx
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Title from './components/title.jsx';
import Data from './data/data.js';
import MediaCard from './components/employee_Card.jsx';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function App() {
  const [showOnLeave, setShowOnLeave] = useState(true);
  console.log(showOnLeave);

  const filteredData = showOnLeave ? Data.filter((employee) => employee.onLeave) : Data;
  
  const toggleOnLeave = () => {
    setShowOnLeave(!showOnLeave);
  };

  return (
    <Container fixed>
      <Typography variant="h4" gutterBottom>
        Employee Dashboard
      </Typography>
      <Button variant="contained" onClick={toggleOnLeave}>All</Button>
      <Button variant="contained" onClick={toggleOnLeave}>On Leave</Button>
      <Button variant="contained" onClick={toggleOnLeave}>Off Leave</Button>
      <MediaCard data={filteredData} />
    </Container>
  );
}

export default App;


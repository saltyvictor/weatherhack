import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Weather from './components/Weather'

function App() {
  return (
    <Container className="container" maxWidth="sm">
      <h2>WeaRther app</h2>
      <Weather/>
    </Container>
    
  );
}

export default App;

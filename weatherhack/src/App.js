import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Weather from './components/Weather/Weather'


function App() {
  return (
    <div className="App">
      <Container className="container" maxWidth="sm">
        <Weather/>
      </Container>
    </div>
  );
  // sending Weather in without props 
}

export default App;

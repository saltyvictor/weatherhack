import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import Clothes from './components/Clothes'


function App() {
  return (
    <div className="App">
      <Container className="container" maxWidth="sm">
        <Clothes temperature/>
      </Container>
    </div>
  );
}

export default App;

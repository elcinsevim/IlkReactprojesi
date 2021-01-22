import React from 'react';
import logo from './logo.svg';
import './App.css';
import { CardExample } from './Examples/CardExample';
import { Container, Header } from 'semantic-ui-react';
import { FormExample } from './Examples/FormExample';

function App() {
  return (
    <Container>
        <Header size='huge'>Huge Header</Header>
       <CardExample/>
       <FormExample/>
    </Container>
     
     
  );
}

export default App;

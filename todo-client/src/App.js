// * dependencies 
import React from 'react';

// * components:
import CardContainer from './components/CardContainer';
import FormContainer from './components/FormContainer';

// * stylings:
import './CSS/index.css'

function App() {
  return (
    <div className="App">
      <FormContainer />
      <CardContainer />
    </div>
  );
}

export default App;

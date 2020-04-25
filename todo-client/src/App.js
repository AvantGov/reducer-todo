// * dependencies 
import React, { useReducer } from 'react';
import { initialState, todoReducer } from './reducers/index';

// * components:
import CardContainer from './components/CardContainer';
import FormContainer from './components/FormContainer';

// * stylings:
import './CSS/index.css'

function App() {

  const [ state, dispatch ] = useReducer(todoReducer, initialState)

  return (
    <div className="App">
      <FormContainer dispatch={dispatch}/>
      <CardContainer  state={state} dispatch={dispatch} />
    </div>
  );
}

export default App;

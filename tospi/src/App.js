import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import WrappedRegistrationForm from './components/register';
import LoginForm from './components/login';
import CreateStoreForm from './components/createStore/firstView'

function App() {
  return (
    // <div className="App">
    <Switch>
      <Route path='/register'>
        <WrappedRegistrationForm/>
      </Route>
      <Route path='/login'>
        <LoginForm/>
      </Route>
      <Route path='/createstore'>
        <CreateStoreForm/>
      </Route>
    </Switch>
    // </div>
  );
}

export default App;

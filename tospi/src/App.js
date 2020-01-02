import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';
import WrappedRegistrationForm from './components/register';
import LoginForm from './components/login';

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
    </Switch>
    // </div>
  );
}

export default App;

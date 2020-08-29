import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Battle from './components/Battle';
import Footer from './components/Footer';
import Scoreboard from './components/Scoreboard';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact component={Battle} />
        <Route path={'/scoreboard'} component={Scoreboard} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

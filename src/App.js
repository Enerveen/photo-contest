import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import './App.css';
import Battle from './components/Battle';
import Info from './components/Info';
import Nav from './components/Nav';
import Scoreboard from './components/Scoreboard';
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route path={'/#'} exact component={Battle} />
        <Route path={'/#/scoreboard'} component={Scoreboard} />
        <Route path={'/#/info'} component={Info} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

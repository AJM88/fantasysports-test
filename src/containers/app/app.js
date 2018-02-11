import React from 'react';
import { Route, Link } from 'react-router-dom'
import LineupField from '../lineupField';
import About from '../about'

const App = () => (
  <div>
    <header>
      <Link to="/">Lineup</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/" component={LineupField} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App;

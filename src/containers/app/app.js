import React from 'react';
import { Route, Link } from 'react-router-dom'
import LineupField from '../lineupField';
import About from '../about'
import './app.css'

const App = () => (
  <div>
    <nav className="nav">
      <Link className="nav-item" to="/">Lineup</Link>
      <Link className="nav-item" to="/about">About</Link>
    </nav>

    <main>
      <Route exact path="/" component={LineupField} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
)

export default App;

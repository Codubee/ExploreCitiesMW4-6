import logo from './logo.svg';
import './App.css';

import LandingPage from './components/LandingPage/LandingPage'
import NavBar from './components/NavBar/Navbar'
import Explanation from './components/LandingPage/Explanation/Explanation';
import Features from './components/LandingPage/Features/Features';
import Team from './components/LandingPage/Team/Team';
import Tools from './components/LandingPage/Tools/Tools';

import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <NavBar />
            <div2>
              <ul>
                <Link to = "/explanation">Explanation</Link>
              </ul>
              <ul>
                <Link to = "/features">Features</Link>
              </ul>
              <ul>
                <Link to = "/team">Team</Link>
              </ul>
              <ul>
                <Link to = "/tools">Tools</Link>
              </ul>
            </div2>
          </ul>
        </nav>
        
        <Switch>
          <Route exact path ="/">
            <h2>Welcome to Explore Cities!</h2>
            <LandingPage />
          </Route>
          <Route path ="/explanation">
            <Explanation />
          </Route>
          <Route path ="/features">
            <Features />
          </Route>
          <Route path ="/team">
            <Team />
          </Route>
          <Route path = "/tools">
            <Tools />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}
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
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to = "/explanation">Explanation</Link>
            </li>
            <li>
              <Link to = "/features">Features</Link>
            </li>
            <li>
              <Link to = "/team">Team</Link>
            </li>
            <li>
              <Link to = "/tools">Tools</Link>
            </li>
            
          </ul>
        </nav>
        
        <Switch>
          <Route exact path ="/">
            <Home />
            <h3>Welcome to Explore Cities!</h3>
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

function Home(){
  return <h2>Home</h2>
}

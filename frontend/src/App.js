import logo from './logo.svg';
import './App.css';
import { Container } from 'reactstrap'

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
} from "react-router-dom";


export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/input">
            </Route>
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
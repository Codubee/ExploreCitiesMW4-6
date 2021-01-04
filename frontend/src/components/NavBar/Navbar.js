import * as ReactBootStrap from 'react-bootstrap'
import {Link, Switch} from "react-router-dom";
import "./NavBar.css";

function Navbar() {

  return (
    <div>
      <ReactBootStrap.Nav class="navbar navbar-expand-lg navbar-custom bg-custom">
        <ReactBootStrap.Navbar>
          <ReactBootStrap.Navbar.Brand href="/" class="navbar-brand">Explore Cities</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
         
              <div classname = "nav-container">
                <nav>
                  <ul>
                    <li>
                      <Link to = "/explanation" style={{color: '#E0FBFC'}} 
                      activeStyle={{color: '#ee6c4d'}}>Explanation</Link>
                    </li>
                    <li>
                      <Link to = "/features" style={{color: '#E0FBFC'}}
                      activeStyle={{color: '#ee6c4d'}}>Features</Link>
                    </li>
                    <li>
                      <Link to = "/team" style={{color: '#E0FBFC'}}
                      activeStyle={{color: '#ee6c4d'}}>Team</Link>
                    </li>
                    <li>
                      <Link to = "/tools" style={{color: '#E0FBFC'}}
                      activeStyle={{color: '#ee6c4d'}}>Tools</Link>
                    </li>
                    <li>
                      <a href='https://github.com/Codubee/ExploreCitiesMW4-6' 
                        style={{color: '#E0FBFC'}} activeStyle={{color: '#ee6c4d'}}>Github</a>
                    </li>
                  </ul>                                
                </nav>
              </div>

          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </ReactBootStrap.Nav>
    </div>
  );
}
export default Navbar;
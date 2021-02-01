import * as ReactBootStrap from 'react-bootstrap'
import {Link, Switch} from "react-router-dom";
import "./NavBar.css";

function Navbar() {

  return (

      <ReactBootStrap.Nav class="navbar navbar-expand-lg navbar-custom bg-custom">
        <ReactBootStrap.Navbar>
          <ReactBootStrap.Navbar.Brand href="/" class="navbar-brand">Explore Cities</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
         
              <div classname = "">
                <nav>
                  <ul>
                    <li>
                      <Link to = "/" style={{color: '#E0FBFC'}} 
                      activeStyle={{color: '#ee6c4d'}}>Home</Link>
                    </li>
                    <li>
                      <Link to = "/input" style={{color: '#E0FBFC'}}
                      activeStyle={{color: '#ee6c4d'}}>Input</Link>
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

  );
}
export default Navbar;
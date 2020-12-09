import * as ReactBootStrap from 'react-bootstrap'
import "./NavBar.css";

function Navbar() {

  return (
    <div>
      <ReactBootStrap.Nav class="navbar navbar-expand-lg navbar-custom bg-custom">
        <ReactBootStrap.Navbar>
          <ReactBootStrap.Navbar.Brand href="#home" class="navbar-brand">Explore Cities</ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

            <ReactBootStrap.Nav.Link class="nav-link" href="https://github.com/Codubee/ExploreCitiesMW4-6" >Github</ReactBootStrap.Nav.Link>
            <ReactBootStrap.Nav.Link href="#home" >Home</ReactBootStrap.Nav.Link>

          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar>
      </ReactBootStrap.Nav>
    </div>
  );
}
export default Navbar;
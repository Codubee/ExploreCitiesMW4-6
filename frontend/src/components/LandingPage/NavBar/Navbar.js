
import * as ReactBootStrap from 'react-bootstrap'
function Navbar(){
    return (<div>
        <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
      <ReactBootStrap.Navbar.Brand href="#home">Explore Cities</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootStrap.Nav className="mr-auto">
          <ReactBootStrap.Nav.Link href="https://github.com/Codubee/ExploreCitiesMW4-6">Github</ReactBootStrap.Nav.Link>
          <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
        </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
        </div>
      );
}
export default Navbar;
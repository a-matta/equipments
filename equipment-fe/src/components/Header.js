import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Collapse>
        <Nav.Link as={Link} to="/">
          Home
        </Nav.Link>
        <Nav.Link as={Link} to="/equipments">
          Equipments
        </Nav.Link>
        <Nav.Link as={Link} to="/create">
          Create New Equipment
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

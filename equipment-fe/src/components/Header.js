import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar expand="lg" variant="light" bg="light">
      <Navbar.Collapse>
        <Nav.Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            Home
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/equipments" style={{ textDecoration: "none" }}>
            Equipments
          </Link>
        </Nav.Link>
        <Nav.Link>
          <Link to="/create" style={{ textDecoration: "none" }}>
            Create New Equipment
          </Link>
        </Nav.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

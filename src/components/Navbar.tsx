import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export function Navbar() {
  return (
    <NavbarBs sticky="top" className="bg-white shadow-lg mb-3">
      <Container>
        <Nav className="me-auto">
          <Nav.Link to="/" as={NavLink}>
            Home
          </Nav.Link>
          <Nav.Link to="/store" as={NavLink}>
            Store
          </Nav.Link>
          <Nav.Link to="/about" as={NavLink}>
            About
          </Nav.Link>
        </Nav>
        <Button
          style={{ width: "3rem", height: "3rem" }}
          variant="outline-primary"
          className="rounded-circle"
        >
          <FontAwesomeIcon icon={faCartShopping} />
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.2rem",
              height: "1.2rem",
              position: "absolute",
              bottom: "6px",
              right: "7%",
            }}
          >
            3
          </div>
        </Button>
      </Container>
    </NavbarBs>
  );
}

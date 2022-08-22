import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Nav } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar className="bg-[#1A5653]">
      <Container className="text-white">
        <Navbar.Brand className="text-white" href="#home">Bitcoin</Navbar.Brand>
        <Nav className="me-auto ">
          <Nav.Link className="text-white" href="#home">Home</Nav.Link>
          <Nav.Link className="text-white" href="#features">Details</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

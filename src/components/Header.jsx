import {
  Row,
  Button,
  Container,
  Nav,
  Navbar,
  Form,
  NavDropdown,
  Badge,
} from "react-bootstrap";

const Header = ({ handleShow, count }) => {
  return (
    <Row>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Pizza House</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action1">Action 1</NavDropdown.Item>
                <NavDropdown.Item href="#action2">Action 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Disabled Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Button className="ms-2" variant="primary" onClick={handleShow}>
              Cart <Badge bg="secondary">{count}</Badge>
              <span className="visually-hidden">items in cart</span>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Row>
  );
};

export default Header;

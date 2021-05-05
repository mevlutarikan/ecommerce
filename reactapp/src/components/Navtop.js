import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

export function Navtop() {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/">E-store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline className="flex-fill mx-sm-3">
          <FormControl type="text" placeholder="Search" className="flex-fill mx-sm-1" />
          <Button variant="outline-success mx-sm-1">Search</Button>
        </Form>
          <a href="/login" className="btn btn-primary">Login</a>
      </Navbar.Collapse>
    </Navbar>
  );
}

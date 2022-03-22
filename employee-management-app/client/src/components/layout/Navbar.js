import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";


export default function MyNavbar(){

    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="#home">Employee Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Add Employee</Nav.Link>
                    </Nav>
                    <Nav>
                        <Button variant={"outline-info"} className={'m-lg-1'}>
                            Sign up
                        </Button>
                        <Button variant={"outline-danger"} className={'m-lg-1'}>
                            Sign out
                        </Button>
                        <Button variant={"info"}  className={'m-lg-1'}>
                            Sign in
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
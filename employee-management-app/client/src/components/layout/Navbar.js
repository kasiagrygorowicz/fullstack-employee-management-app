import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useContext} from "react";
import AuthContext from "../../security/authContext";
import {Link} from "react-bootstrap-icons";
import {useNavigate} from "react-router-dom";


export default function MyNavbar(){

    const authCtx = useContext(AuthContext)
    const navigate =useNavigate()

    const logoutHandler = () => {
        authCtx.logout();
    }

    return(

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Container>
                <Navbar.Brand href="/">Employee Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/user/create">Add Employee</Nav.Link>
                    </Nav>
                    <Nav>

                        {authCtx.isLoggedIn &&
                            <Button variant={"outline-danger"} className={'m-lg-1'} onClick={logoutHandler} >
                                Sign out
                            </Button>
                        }
                        {!authCtx.isLoggedIn&&
                        <>

                        <Button variant={"outline-info"} className={'m-lg-1'} onClick={()=>navigate('/signup',{replace:true})}>

                            Sign up

                        </Button>

                        <Button variant={"info"}  className={'m-lg-1'} onClick={()=>navigate('/login',{replace:true})}>
                        Sign in
                        </Button>
                        </>

                    }

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    )
}
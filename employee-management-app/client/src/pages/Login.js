import {Alert, Button, ButtonGroup, Container, Form} from "react-bootstrap";

import {Link} from "react-router-dom";

export default function Login() {

    return (
        <Container className="row bg-dark p-xxl-5 p-xl-4 pt-md-3  col-md-10 col-lg-8 col-xl-5 h-25 " style={{
            marginTop: '120px',
            borderRadius: '15px'
        }} fluid>
            <h1 className="text-white mb-4 "> Sign in!</h1>
            <Form>
                <Form.Group className=' mb-3'>
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type='email' placeholder={'email@email.com'} required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className="text-white">{'Password'}</Form.Label>
                    <Form.Control type='password' placeholder={'********'} required/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formRemember'>
                    <Form.Check className="text-white" type='checkbox' label={'Remember me'}/>
                </Form.Group>
                <Alert className="alert-danger mt-4">Error</Alert>
                <ButtonGroup className='mb-3 d-flex'>
                    <Button className="bg-info border-info text-dark" type='submit'>{'Login'}</Button>
                </ButtonGroup>
                <p className="text-white">Don't have account? <Link to="/signup" className="text-info">Sign up!</Link>
                </p>
            </Form>
        </Container>
    );
}
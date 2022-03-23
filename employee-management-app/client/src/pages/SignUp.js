import {Alert, Button, ButtonGroup, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function Signup(){

    return(
        <Container className="row bg-dark p-xxl-5 p-xl-4 pt-md-3  col-md-10 col-lg-8 col-xl-5 h-25 " style={{
            marginTop: '120px',
            borderRadius: '15px'
        }} fluid>
            <h1 className="text-white mb-4 "> Sign up!</h1>
            <Form>
                <Form.Group className=' mb-3'>
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control type='email' placeholder={'email@email.com'} required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className="text-white">{'Password'}</Form.Label>
                    <Form.Control type='password' placeholder={'********'} required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className="text-white">{'Confirm password'}</Form.Label>
                    <Form.Control type='password' placeholder={'********'} required/>
                </Form.Group>
                <Alert className="alert-danger mt-4">Error</Alert>
                <ButtonGroup className='mb-3 d-flex'>
                    <Button className="bg-info border-info text-dark" type='submit'>{'Create account'}</Button>
                </ButtonGroup>
                <p className="text-white">Already have an account? <Link to="/login" className="text-info">Sign in!</Link>
                </p>
            </Form>
        </Container>
    );
}
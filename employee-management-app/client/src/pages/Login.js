import {Alert, Button, ButtonGroup, Container, Form} from "react-bootstrap";

import {Link, useNavigate} from "react-router-dom";
import {createRef, useContext} from "react";
import useFetch from "../api/useFetch";
import AuthContext from "../security/authContext";

export default function Login() {
    const emailRef = createRef()
    const pswRef = createRef()
    const { isLoading, error, sendRequest: loginRequest } = useFetch();
    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);

    function submitHandler(e) {
        e.preventDefault()


        const loginRequestContent = {
            url: "/login",
            method: "POST",
            body: {
                'username': emailRef.current.value,
                'password': pswRef.current.value
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }

        loginRequest(loginRequestContent,
            (response)=>{
                authCtx.login(response['access_token'])
                navigate('/dashboard', { replace: true })
            }
            );

    }


    return (
        <Container className="row bg-dark p-xxl-5 p-xl-4 pt-md-3  col-md-10 col-lg-8 col-xl-5 h-25 " style={{
            marginTop: '120px',
            borderRadius: '15px'
        }} fluid>
            <h1 className="text-white mb-4 "> Sign in!</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className=' mb-3'>
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control ref={emailRef} type='email' placeholder={'email@email.com'} required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className="text-white">{'Password'}</Form.Label>
                    <Form.Control ref={pswRef} type='password' placeholder={'********'} required/>
                </Form.Group>
                <Form.Group className='mb-3' controlId='formRemember'>
                    <Form.Check className="text-white" type='checkbox' label={'Remember me'}/>
                </Form.Group>
                {error && <Alert className="alert-danger mt-4">{error +' Make sure you provide correct credentials'}</Alert>}
                <ButtonGroup className='mb-3 d-flex'>
                    <Button className="bg-info border-info text-dark" type='submit'>{'Login'}</Button>
                </ButtonGroup>
                <p className="text-white">Don't have account? <Link to="/signup" className="text-info">Sign up!</Link>
                </p>
            </Form>
        </Container>
    );
}
import {Alert, Button, ButtonGroup, Container, Form} from "react-bootstrap";
import {Link} from "react-router-dom";
import {createRef, useState} from "react";
import useFetch from "../api/useFetch";
import {useNavigate} from "react-router-dom";

export default function Signup() {
    const emailRef = createRef()
    const pswRef = createRef()
    const pswConfirmRef = createRef()
    const [err, setErr] = useState(null)
    const {isLoading, error, sendRequest: registrationRequest} = useFetch();
    const navigate = useNavigate();

    function submitHandler(e) {

        e.preventDefault()

        try {
            setErr(null)
            if (!(pswRef.current.value == pswConfirmRef.current.value)) {
                throw new Error("Passwords don't match")
            }


            const registrationRequestContent = {
                url: "/register",
                method: "POST",
                body: {
                    'username': emailRef.current.value,
                    'password': pswRef.current.value,
                },
                headers: {
                    'Content-Type': 'application/json'

                }
            }

            registrationRequest(registrationRequestContent, (r) => navigate('/login'), {replace: true});

        } catch (e) {
            setErr(e.message)
        }

    }

    return (
        <Container className="row bg-dark p-xxl-5 p-xl-4 pt-md-3  col-md-10 col-lg-8 col-xl-5 h-25 " style={{
            marginTop: '120px',
            borderRadius: '15px'
        }} fluid>
            <h1 className="text-white mb-4 "> Sign up!</h1>
            <Form onSubmit={submitHandler}>
                <Form.Group className=' mb-3'>
                    <Form.Label className="text-white">Email</Form.Label>
                    <Form.Control ref={emailRef} type='email' placeholder={'email@email.com'} required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className="text-white">{'Password'}</Form.Label>
                    <Form.Control type='password' ref={pswRef} placeholder={'********'} required/>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className="text-white">{'Confirm password'}</Form.Label>
                    <Form.Control type='password' ref={pswConfirmRef} placeholder={'********'} required/>
                </Form.Group>
                {
                    (err && <Alert className="mt-4 alert-danger">{err}</Alert>)
                    ||
                    (error && <Alert className="mt-4 alert-danger">{error}</Alert>)
                }
                <ButtonGroup className='mb-3 d-flex'>
                    <Button className="bg-info border-info text-dark" type='submit'>{'Create account'}</Button>
                </ButtonGroup>
                <p className="text-white">Already have an account? <Link to="/login" className="text-info">Sign
                    in!</Link>
                </p>
            </Form>
        </Container>
    );
}
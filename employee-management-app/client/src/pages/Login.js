import {Button, ButtonGroup, Form} from "react-bootstrap";


export default function Login(){

    return(
        <div>
            <Form class="bg-dark">
                <Form.Group className='mb-3'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' placeholder={'email@email.com'} required />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>{'Password'}</Form.Label>
                    <Form.Control type='password' placeholder={'***'} required />
                </Form.Group>
                <ButtonGroup className='d-flex'>
                    <Button type='submit'>{'Login'}</Button>
                </ButtonGroup>
            </Form>
        </div>
    );
}
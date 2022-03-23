import {Alert, Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useState} from "react";



export default function CreateEmployee() {
    const [selectedDepartment,selectDepartment]=useState(2)
    return (
        <Container className="row bg-dark p-xxl-5 p-xl-4 pt-md-3  col-md-10 col-lg-8 col-xl-5 h-25 " style={{
            marginTop: '120px',
            borderRadius: '15px'
        }} fluid>
            <h1 className="text-white mb-4 "> Add new employee</h1>
            <Form>

                <Row className="mb-3">
                    <Col>
                        <Form.Group >
                            <Form.Label className="text-white">Firstname</Form.Label>
                            <Form.Control type='name' required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group >
                            <Form.Label className="text-white">Lastname</Form.Label>
                            <Form.Control type='name'required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label className=" text-white">Department</Form.Label>
                <Form.Select  className="mb-3" value={selectedDepartment} onChange={(v)=>  selectDepartment(v.target.value)} id="disabledSelect">
                    <option>Departamnet 1</option>
                    <option>Departamnet 2</option>
                    <option>Departamnet 3</option>
                </Form.Select>
                </Form.Group>
                <Form.Group>
                    <Form.Label className=" text-white">Salary</Form.Label>
                    <Form.Control  min={0.00} type='number'required/>
                    <Form.Text>Annual salary.</Form.Text>
                </Form.Group>

                <Alert className="alert-danger mt-4">Error</Alert>
                <ButtonGroup className='mb-3 d-flex'>
                    <Button className="bg-info border-info text-dark" type='submit'>{'Add new employee'}</Button>
                </ButtonGroup>

            </Form>
        </Container>
    );
}
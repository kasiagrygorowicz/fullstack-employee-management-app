import {Alert, Button, ButtonGroup, Col, Container, Form, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {createRef, useState} from "react";
import useFetch from "../api/useFetch";
import {BsArrowBarLeft} from "react-icons/bs";
import {AiOutlineArrowLeft} from "react-icons/ai";


export default function CreateEmployee() {

    const {isLoading, error, sendRequest: createEmployeeRequest} = useFetch();
    const departments = ['HR', 'IT', 'Accounting', 'Sales']
    const firstnameRef = createRef()
    const lastnameRef = createRef()
    const salaryRef = createRef()

    const navigate = useNavigate();

    function submitHandler(e) {
        e.preventDefault()


        const createEmployeeRequestContent = {
            url: "/employee",
            method: "POST",
            body: {
                firstname: firstnameRef.current.value,
                lastname: lastnameRef.current.value,
                salary: salaryRef.current.value,
                department: selectedDepartment
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }

        createEmployeeRequest(createEmployeeRequestContent,
            (response) => {
                navigate('/?success=true', {replace: true})
            }
        );

    }

    const [selectedDepartment, selectDepartment] = useState(2)
    return (
        <Container className="row bg-dark p-xxl-5 p-xl-4 pt-md-3  col-md-10 col-lg-8 col-xl-5 h-25 " style={{
            marginTop: '120px',
            borderRadius: '15px'
        }} fluid>

            <Row className="row">
                <Col>
                    <AiOutlineArrowLeft size="40" style={{
                        color:'white',
                    }} onClick={()=>navigate('/dashboard')}/>
                </Col>
                <Col className="col-lg-10 justify-content-right">
                    <h1 className="text-white mb-4 "> Add new employee</h1>
                </Col>
            </Row>

            <Form onSubmit={submitHandler}>

                <Row className="mb-3">
                    <Col>
                        <Form.Group>
                            <Form.Label className="text-white">Firstname</Form.Label>
                            <Form.Control ref={firstnameRef} type='name' required/>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label className="text-white">Lastname</Form.Label>
                            <Form.Control ref={lastnameRef} type='name' required/>
                        </Form.Group>
                    </Col>
                </Row>
                <Form.Group>
                    <Form.Label className=" text-white">Department</Form.Label>
                    <Form.Select className="mb-3" value={selectedDepartment}
                                 onChange={(v) => selectDepartment(v.target.value)} id="disabledSelect">
                        {
                            departments.map(d => (
                                <option value={d}>{d}</option>
                            ))
                        }
                    </Form.Select>
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label className=" text-white">Salary</Form.Label>
                    <Form.Control ref={salaryRef} min={0.00} type='number' required/>
                    <Form.Text>Annual salary.</Form.Text>
                </Form.Group>

                {error && <Alert className="alert-danger mt-4">{error}</Alert>}


                <ButtonGroup className='mb-3 d-flex'>
                    <Button className="bg-info border-info text-dark" type='submit'>{'Add new employee'}</Button>

                </ButtonGroup>

            </Form>
        </Container>
    );
}
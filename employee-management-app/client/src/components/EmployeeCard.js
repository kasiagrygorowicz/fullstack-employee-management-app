import {Accordion, Badge, Button, Card, Col, useAccordionButton} from "react-bootstrap";
import {MdRemoveCircle} from "react-icons/md";
import {BsFillInfoCircleFill} from "react-icons/bs";
import useFetch from "../api/useFetch";

import {useContext} from "react";
import EmployeeListChangeContext from "../security/changeContext";
import {GrEdit} from "react-icons/gr";
import {useNavigate} from "react-router-dom";


export default function EmployeeCard(props) {
    const {isLoading, error, sendRequest: deleteEmployee} = useFetch();
    const navigate = useNavigate();
    const context = useContext(EmployeeListChangeContext)


    function deleteHandler() {

        const deleteEmployeeRequestContent = {
            url: `/employee/${props.id}`,
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }


        deleteEmployee(deleteEmployeeRequestContent, () => {
            context.updated = !context.updated
            navigate('/?delete=true', {replace: true})
        })

    }

    function editHandler() {
        navigate('/user/employee/edit', {
            state: {
                id: props.id,
                firstname: props.firstname,
                lastname: props.lastname,
                salary: props.salary,
                department: props.department
            }
        })

    }

    return (
        <Accordion defaultActiveKey="0" className=" mb-4">
            <Card className=" h-100 w-100 bg-info border-info">
                <Card.Header className=" row align-items-center">
                    <Col className="col-lg-10">
                        <h3>{props.firstname + ' ' + props.lastname}</h3>
                    </Col>
                    <Col className="row">
                        <Col className="col-lg-4">
                            <MoreInfoToggle eventKey="1"/>
                        </Col>
                        <Col className="col-lg-4">
                            <MdRemoveCircle
                                style={{color: '#DE0B0B', width: '30px', height: '30px'}}
                                onClick={deleteHandler}/>
                        </Col>
                        <Col className="col-lg-4">
                            <GrEdit style={{
                                color:'green', width: '25px', height: '25px'
                            }} onClick={editHandler}/>
                        </Col>


                    </Col>
                </Card.Header>

                <Accordion.Collapse eventKey="1" className="bg-dark">
                    <Card.Body className="row align-items-start justify-content-startr">
                        <Col className="col-lg-2">
                            <h5 className="text-white">Salary: {props.salary}</h5>
                        </Col>
                        <Col className="col-lg-3 ">
                            <h5>
                            <Badge className="w-75" bg="info" size={25} text="black">{props.department}</Badge>
                        </h5>
                        </Col>

                    </Card.Body>
                </Accordion.Collapse>
            </Card>

        </Accordion>)
}


function MoreInfoToggle({children, eventKey}) {
    const decoratedOnClick = useAccordionButton(eventKey);

    return (
        <BsFillInfoCircleFill
            type="button"
            onClick={decoratedOnClick}
            style={{
                color: 'blue', width: '25px', height: '25px'
            }}
        >
            {children}
        </BsFillInfoCircleFill>
    );
}



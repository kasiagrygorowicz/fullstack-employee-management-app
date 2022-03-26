import {Accordion, Badge, Button, Card, Col, useAccordionButton} from "react-bootstrap";
import {MdRemoveCircle} from "react-icons/md";
import {BsFillInfoCircleFill} from "react-icons/bs";
import useFetch from "../api/useFetch";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import EmployeeListChangeContext from "../security/changeContext";




export default function EmployeeCard(props) {
    const { isLoading, error, sendRequest: deleteEmployee } = useFetch();
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


        deleteEmployee(deleteEmployeeRequestContent,()=>{
            context.updated=!context.updated
            navigate('/', {replace: true})
        })

    }

    return(
    <Accordion defaultActiveKey="0" className=" mb-4">
        <Card className=" h-100 w-100 bg-info border-info">
            <Card.Header className=" text-white">
                <h3>{props.firstname+' '+props.lastname}</h3>
                <MoreInfoToggle size={30} eventKey="1"/>
                <MdRemoveCircle
                    style={{color:'danger-800',width:'25px',height:'25px'}}
                    onClick={deleteHandler}/>
            </Card.Header>
            <Accordion.Collapse eventKey="1" className="bg-dark">
                <Card.Body className="row align-items-center justify-content-center">
                    <Col className="col-lg-6">
                        <p className="text-white">Salary: {props.salary}</p>
                    </Col>
                   <Col className="col-lg-6 ">
                       <Badge className="w-50" bg="info" text="black">{props.department}</Badge>
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
        >
            {children}
        </BsFillInfoCircleFill>
    );
}



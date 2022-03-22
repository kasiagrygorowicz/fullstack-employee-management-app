import {Card} from "react-bootstrap";
import {BsGear} from "react-icons/bs";

export default function EmployeeCard() {
    return(
    <Card bg={"dark"} style={{width:'80%', height:'10%'}}>
        <Card.Body className="text-info">This is some text within a card body.</Card.Body>
        <BsGear class="text-info"/>
    </Card>
    );
}
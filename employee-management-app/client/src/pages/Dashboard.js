import {Container, Row} from "react-bootstrap";
import EmployeeCard from "../components/EmployeeCard";

export default function Dashboard() {
    return (
        // <div class='min-vh-100 bg-info '>

            <Container className='row' fluid style={{
                justifyContent:'center',backgroundColor:'red',

                marginBottom:'0'
            }}>

                <Row class="bg-dark">
                    <EmployeeCard/>
                </Row>
                <Row>
                    <EmployeeCard/>
                </Row>
                <Row>
                    <EmployeeCard />
                </Row>

            </Container>



        // </div>
    );
}
import {Alert, Container, Pagination, Row} from "react-bootstrap";
import EmployeeCard from "../components/EmployeeCard";
import {useLocation, useParams} from "react-router-dom";
import {useContext, useEffect, useMemo} from "react";
import useFetch from "../api/useFetch";
import useUserEmployees from "../api/getEmployees";
import EmployeeListChangeContext from "../security/changeContext";

export default function Dashboard() {
    let param = useQuery()
    const context = useContext(EmployeeListChangeContext)
    const {isLoading, error, employees, setEmployees} = useUserEmployees();


    function useQuery() {
        const {search} = useLocation();

        return useMemo(() => new URLSearchParams(search), [search]);
    }

    return (

        <Container
            key={context.updated}
            className="row bg-dark p-xxl-5 p-xl-4 pt-md-3  col-md-10 col-lg-8 col-xl-5 h-100 w-75 " style={{
            marginTop: '120px',
            borderRadius: '15px'
        }} fluid>

            {
                param.get('success') && <Alert className="alert-success">Employee created successfully.</Alert>

            }

            {
                employees.map(e => (
                    <EmployeeCard
                        key={e.id}
                        id={e.id}
                        firstname={e.firstname}
                        lastname={e.lastname}
                        department={e.department}
                        salary={e.salary}

                    />))
            })
            }

        </Container>

    );
}
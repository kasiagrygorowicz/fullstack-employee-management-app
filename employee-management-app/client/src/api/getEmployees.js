import jwt_decode from "jwt-decode";
import {useContext, useEffect, useState} from "react";
import useFetch from "./useFetch";
import AuthContext from "../security/authContext";


const useUserEmployees = ()=>{
    const { isLoading, error, sendRequest: fetchUserEmployees } = useFetch();
    const [ employees, setEmployees] = useState([]);
    const authCtx = useContext(AuthContext);

    useEffect(() => {
        const getEmployeesHandler = (employeeObj) => {
            const loadedEmployees = [];
            for (const employeeKey in employeeObj) {
                loadedEmployees.push({
                    id: employeeObj[employeeKey].id,
                    firstname: employeeObj[employeeKey].firstname,
                    lastname: employeeObj[employeeKey].lastname,
                    salary: employeeObj[employeeKey].salary,
                    department : employeeObj[employeeKey].department
                });
            }
            setEmployees(loadedEmployees);
        }

        const userId = jwt_decode(authCtx.authToken).id;
        const urlRequest = `/employee/all`;
        const fetchUserEmployeesRequest = {
            url: urlRequest
        };

        fetchUserEmployees(fetchUserEmployeesRequest, getEmployeesHandler);
    }, [fetchUserEmployees]);

    

    return {
        isLoading,
        error,
        employees,
        setEmployees
    };
}

export default useUserEmployees
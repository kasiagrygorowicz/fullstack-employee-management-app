import './App.css';
import Dashboard from "./pages/Dashboard";
import {Routes, Route, Navigate} from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";
import {useContext} from "react";
import AuthContext from "./security/authContext";

function App() {

    const authCtx = useContext(AuthContext)

    return (
        <Layout>
            <Routes>

                {!authCtx.isLoggedIn &&
                    <>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    </>
                }
                {authCtx.isLoggedIn && (
                    <>
                        <Route path="/dashboard" element={<Dashboard/>}/>
                        <Route path="/user/create" element={<CreateEmployee/>}/>
                        <Route path="/user/employee/edit" element={<EditEmployee/>}/>
                        <Route path="/employee/details" element={<EmployeeDetails/>}/>
                    </>)}

                <Route path='/*' element={<Navigate to="/dashboard" />} />
            </Routes>
        </Layout>


    );
}

export default App;

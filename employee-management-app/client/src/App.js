import './App.css';
import Dashboard from "./pages/Dashboard";
import {Routes,Route} from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EditEmployee from "./pages/EditEmployee";
import EmployeeDetails from "./pages/EmployeeDetails";
import Signup from "./pages/SignUp";
import Login from "./pages/Login";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
        <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/user/create" element={<CreateEmployee/>}/>
            <Route path="/user/employee/edit" element={<EditEmployee/>}/>
            <Route path="/employee/details" element={<EmployeeDetails/>}/>
        </Routes>
            </Layout>



    );
}

export default App;

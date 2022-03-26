import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";


const navigate= useNavigate
const AuthContext = React.createContext({
    authToken: '',
    requestToken: '',
    isLoggedIn: false,
    login: (authToken) => {},
    logout: () => {}
});


const isLoggedIn=(authToken,setAuthToken)=>{
   if(!!authToken){
       var decodedToken=jwt_decode(authToken);
       console.log(decodedToken.exp*1000<new Date().getTime)
       if(decodedToken.exp*1000<new Date().getTime()){
           console.log('Deleting token')

           localStorage.removeItem("authToken");
           setAuthToken(null);
       }else{
           return true
       }
   }

   return false
}

export const AuthContextProvider = (props) => {
    const initialAuthToken = localStorage.getItem("authToken");
    const [authToken, setAuthToken] = useState(initialAuthToken);

    const userIsLoggedIn = isLoggedIn(authToken,setAuthToken);

    const requestToken = 'Bearer ' + authToken;
    const loginHandler = (authToken) => {
        setAuthToken(authToken);
        localStorage.setItem("authToken", authToken);
    }

    const logoutHandler = () => {
        setAuthToken(null);
        localStorage.removeItem("authToken");
        navigate('/login')
    }

    const contextValue = {
        authToken: authToken,
        requestToken: requestToken,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    };

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>);
};

export default AuthContext;

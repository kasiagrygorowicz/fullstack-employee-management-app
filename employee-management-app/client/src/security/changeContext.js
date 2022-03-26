import {createContext, useState} from "react";

const EmployeeListChangeContext = createContext({
    updated: false
})

const EmployeeListChangeContextProvider=(props)=>{
    const initialUpdateState = localStorage.getItem("updateState");
    const [updateKey, setNewKey] = useState(initialUpdateState);

    const contextValue = {
        updated: updateKey,

    };

    return (
        <EmployeeListChangeContext.Provider value={contextValue}>
            {props.children}
        </EmployeeListChangeContext.Provider>
    )
}

export default EmployeeListChangeContext;
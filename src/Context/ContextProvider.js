import { children, createContext, useContext, useState } from "react";
import { students } from "../Data/student";
import { teachers } from "../Data/Teacher";


let AppContext = createContext('');

const AppProvider = ({children})=>{
    const [user,setUser] = useState(students);
    const [Teacher,setTeacher] = useState(teachers)
    return(
        <AppContext.Provider
          value={{user,setUser,Teacher,setTeacher}}>
            {children}
        </AppContext.Provider>
    );
}

export const Appstate = ()=>{
    return useContext(AppContext);
}

export default AppProvider;
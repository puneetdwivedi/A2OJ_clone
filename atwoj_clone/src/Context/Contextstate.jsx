import { useState } from "react";
import UsernameContext from "./Usernamecontext";

export default function Contextstate(props){
    const [username, setusername] = useState({set:"no", info:[]});

    return (
        <UsernameContext.Provider value={{username, setusername}} >
            {props.children}
        </UsernameContext.Provider>
    );

}
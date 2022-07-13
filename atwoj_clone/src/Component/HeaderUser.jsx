import React, { useContext, useEffect, useState } from "react";
import "../css/header.css";
import UsernameContext from "../Context/Usernamecontext";
import axios from "axios";



export default function HeaderUser(){
    const {username, setusername} = useContext(UsernameContext);
    // const [userintermediate, setuserintermediate] = useState("");
    const [userhandle, setUserhandle] = useState("");
    

    const updateuserintermediate = ()=>{
        if(userhandle === ""){
            alert("Userhandle cannot be empty");
            return;
        }
        
        async function checkvaliduser(){
            try{
                const uservalidinfo = await axios(`https://codeforces.com/api/user.info?handles=${userhandle}`);
                setusername((prv)=>{
                    // console.log(uservalidinfo.data.result);
                    return{
                        ...prv,
                        set : "yes",
                        info : uservalidinfo.data.result
                    }
                });

                setUserhandle("");
                // console.log(uservalidinfo.data.result[0].handle);

            }catch(error){
                if(error.code  === "ERR_BAD_REQUEST") alert("Invalid username");
                console.log(error.code);
            }
        }

        checkvaliduser();
    }

 
    return(
        <div className="Header__usersearch">
            <input onChange={(e)=> setUserhandle(e.target.value)} type="text" value={userhandle} placeholder="User handle"/>
            <button onClick={updateuserintermediate}>Search User</button>
        </div>
    );
}





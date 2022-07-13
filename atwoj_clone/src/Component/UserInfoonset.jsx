import React,{useContext} from "react";
import "../css/userinfoonset.css";
import UsernameContext from "../Context/Usernamecontext";


export default function UserInfoonset(){
    const {username, setusername} = useContext(UsernameContext);

    return(

            
                username.set === "yes" && 
                <div className="App__UserInfoonset">
                   <div className="userinfoset_left">
                        <div className="user__image">
                            <img src={username.info[0].avatar} ></img>
                        </div>
                        <div>
                            <h3>{username.info[0].handle}</h3>
                        </div>
                   </div>

                   <div className="userinforset_right">
                        <ul>
                            <li>
                            <b style={{color:"#5f86a9"}}>Name</b>: {username.info[0].firstName} <> </> {username.info[0].lastName}
                            </li>
                            <li>
                                <b style={{color:"#5f86a9"}}>Organization</b>: {username.info[0].organization}
                            </li>
                            <li>
                            <b style={{color:"#5f86a9"}}>Contest Rating</b>: {username.info[0].rating} (max - {username.info[0].rank} {username.info[0].maxRating})
                            </li>
                        </ul>
                    </div>
                </div>

    );
}
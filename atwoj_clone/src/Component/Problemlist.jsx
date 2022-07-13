import React, { useContext, useEffect, useState } from "react";
import "../css/problemlist.css";
import axios from "axios";
import UsernameContext from "../Context/Usernamecontext";
import Stausbutton from "./Stausbutton";


export default function Problemlist({division, difficulty, rating}){
    const [ladder, setladder] = useState([]);
    const [showerror, setshowerror] = useState(false);
    const [usersubmission, setUsersubmission] = useState([]);
    const {username} = useContext(UsernameContext);


    useEffect(()=>{

        let baseurl = `https://puneet-atwoj.herokuapp.com/api/ladder_problem?`;
        if(rating !== null){
            baseurl = baseurl + `problem_rating=${rating}`;
        }
        else{
            baseurl = baseurl + `division=${division}&problem_level=${difficulty}`;
        }

        async function getladder(){
            try{
                const ladder_data = await axios.get(baseurl);
   
                setladder(ladder_data.data.response.ladderproblems);
                // console.log(ladder_data)

            }
            catch(error){
                setshowerror(true);
            }
        }

        getladder();
        
    },[])


    useEffect(()=>{
        // console.log(usersubmission);
        if(username.set === "no"){
            return;
        }

        async function getSubmissions(){

            const submissions = await axios(`https://codeforces.com/api/user.status?handle=${username.info[0].handle}`)
            // console.log(submissions.data);
            // submissions.data.result.map((sub, index)=>{
            //     console.log(sub);
            //     setUsersubmission(prv => [...prv, sub]);
            // })
            setUsersubmission(submissions.data.result)
            // console.log(usersubmission);
        }
        
        getSubmissions();

    },[username]);

   

    return (
        <div className="Problemlist">
            {
                showerror === true && 
                <p style={{color:"red"}}> Unable to fetch at the movement</p>
            }

            {
                showerror === false &&
                <table>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Problem Name</th>
                            <th>Status</th>

                        </tr>
                    </thead>
                <tbody>
                    {
                        ladder.map((item,index) =>{
                            // const status = ;
                            return(
                                <tr key={index}>
                                    <td>{item.serial_no}</td>
                                    <td>
                                        <a href={`https://codeforces.com/problemset/problem/${item.contest_id}/${item.problem_level}`} target="_puneet">
                                            {item.problem_name}
                                        </a>
                                    </td>
                                    <td style={{padding:"0px"}}>
                                        <Stausbutton key={index} 
                                            item = {item}
                                            usersubmission = {usersubmission}
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
                </table>
            }
        </div>

    );
}
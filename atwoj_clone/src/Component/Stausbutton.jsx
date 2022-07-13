import React, { useEffect, useState } from "react";
import "../css/statusbutton.css";


export default function Stausbutton({item, usersubmission}){
    const [stts, setStts] = useState(false);

    useEffect(()=>{
        const sbmson = usersubmission.filter((el) => {
            // console.log(el.problem.index === item.problem_level)
            return (el.problem.index === item.problem_level) && (el.problem.contestId == item.contest_id) && (el.verdict === "OK");
        })
        // console.log(sbmson.length);
        if(sbmson.length > 0){
            setStts(true);
        }

    },[usersubmission]);

    return(
        <div className={(stts)?"yes_green" : "no_red"}>
            {(stts) ? <>Yes</> :  <>No</>}
        </div>
    );
}
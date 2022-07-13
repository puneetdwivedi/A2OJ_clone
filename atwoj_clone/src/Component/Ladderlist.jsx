import React from "react";
import "../css/ladderlist.css";
import Ladder_listItem from "./Ladder_listItem";

function  Ladderlist({ladderlistname, laddertype, ladderlistitem}){
    return (
        <div className="Body__Ladderlist">
            <div className="ladderlistname"><h2>{ladderlistname}</h2></div>

            <Ladder_listItem 
                key={laddertype}
                laddertype = {laddertype}
                ladderlistitem = {ladderlistitem}
            />

        </div>
    );
}

export default Ladderlist;
import React from "react";
import "../css/body.css";
import Ladderlist from "./Ladderlist";

const Ladderlistbyrating = [
    {upper :1300},
    {lower: 1300, upper :1400},
    {lower: 1400, upper :1500},
    {lower: 1500, upper :1600},
    {lower: 1600, upper :1700},
    {lower: 1700, upper :1800},
    {lower: 1800, upper :1900},
    {lower: 1900, upper :2000},
    {lower: 2000, upper :2100},
    {lower: 2100, upper :2200},
    {lower: 2200,}
];

const Ladderlistbydivision = [
    {division : 2, problem_difficulty : 'A'},
    {division : 2, problem_difficulty : 'B'},
    {division : 2, problem_difficulty : 'C'},
    {division : 2, problem_difficulty : 'D'},


];



function  Body(){
    return (
        <div className="App__body">
            <Ladderlist
            key="rating1"
            ladderlistname = "Practice problem by Rating"
            laddertype = "Rating"
            ladderlistitem = {Ladderlistbyrating}
             />

            <Ladderlist
                key="division1"
                ladderlistname = "Practice problem by Divison"
                laddertype = "Division"
                ladderlistitem = {Ladderlistbydivision}
            /> 
        </div>
    );
}

export default Body;
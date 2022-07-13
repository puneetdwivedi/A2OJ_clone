import React from "react";
import "../css/ladderlistitem.css";
import {Link} from "react-router-dom";

export default function Ladder_listItem({laddertype, ladderlistitem}){

    return (
        <div className="LadderlistItem">
            <table>
                <thead>
                    <tr>
                        <th>Sno</th>
                        <th>Ladder Name</th>
                    </tr>
                </thead>
                <tbody>
            {
                ladderlistitem.map((item, index)=>{
                    return(
                        <tr key={index}>
                            <td>{index+1}</td>
                            {
                                laddertype === "Rating" && item.lower === undefined && 
                                <td>
                                    <Link to={`/problemladder?rating=${item.upper}`} >
                                        Codeforces {laddertype} &le; {item.upper}
                                    </Link>
                                </td>
                            }
                            {
                                laddertype === "Rating" && item.upper === undefined && 
                                <td>
                                    <Link to={`/problemladder?rating=${item.lower+100}`} >
                                        Codeforces {laddertype} &le; {item.lower}
                                    </Link>
                                </td>
                            }
                            {
                            laddertype === "Rating" && item.lower && item.upper &&
                                <td>
                                    <Link to={`/problemladder?rating=${item.upper}`} >
                                        {item.lower} &le; Codeforces {laddertype} &le; {item.upper}
                                    </Link>
                                </td>
                            }
                            {
                                laddertype === "Division" && 
                                <td>
                                    <Link to={`/problemladder?division=${item.division}&difficulty=${item.problem_difficulty}`}>
                                        Codeforces Division{item.division} {item.problem_difficulty}
                                    </Link>   
                                </td>
                            }

                    </tr>
                    );
                })
            }
            </tbody>
            </table>
        </div>
    );
}
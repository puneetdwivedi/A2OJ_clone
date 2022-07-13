import React from "react";
import { useLocation } from "react-router-dom";
import "../css/problempage.css";
import Problemlist from "./Problemlist";
 

export default function Problempage(){

    // const [ladder, setladder] = useState();

    const ladderInfo = new URLSearchParams(useLocation().search);
    const division = ladderInfo.get("division");
    const rating = ladderInfo.get("rating");
    const difficulty = ladderInfo.get("difficulty")

    if(division ===null && rating === null && difficulty === null){
        return(
            <div className="page_not_found" style={{height:"80vh", backgroundColor:"white", marginTop:"50px", display :"flex", alignItems: "center", flexDirection:"column"}}>
                <h1> Invalid result</h1>
                <p>No ladder is requested</p>
            </div>
        );
    }

    return(
        <div className="App__problempage">
            <div className="problemlistcotainer">
                <div className="problemlistcotainer_laddername">
                    <h2 style={{marginRight:"5px"}}>Ladder name : Codeforces </h2><> </>
                    {
                        rating === null && 
                        <h2> 
                            Division {division}{difficulty} 
                        </h2>
                    }
                    {
                        rating !== null && 
                        <h2> 
                            Rating {rating}  
                        </h2>
                    }
                </div>
               <Problemlist 
               key={rating}
                rating={rating}
                 difficulty={difficulty}
                division = {division}
               />
            </div>
        </div>
    );
}

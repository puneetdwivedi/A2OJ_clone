import React from "react";
import "../css/header.css";
import HeaderUser from "./HeaderUser";


function Header(){

    return (
        <div className="App__Header">
            <h1>Coderforces Ladder</h1>
            <HeaderUser />
        </div>
    );
}

export default Header;
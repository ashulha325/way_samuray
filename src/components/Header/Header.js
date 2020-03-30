import React from "react";
import  classes from "./Header.module.scss";
const Header = () =>{
    return(
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png"
                alt="background-er"
            />
            <span>I'ts are beautiful social network</span>
        </header>
    );
};
export  default  Header;
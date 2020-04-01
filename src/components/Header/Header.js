import React from "react";
import  classes from "./Header.module.scss";
import {NavLink} from "react-router-dom";

const Header = (props) =>{
    return(
        <header className={classes.header}>
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Oikya_Front_Logo.png"
                alt="background-er"
            />
            <span>I'ts are beautiful social network</span>
            <div className={classes.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={"/login"}>Login</NavLink>
                }

            </div>
        </header>
    );
};
export  default  Header;
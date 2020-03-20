import React from "react";
import  classes from "./Header.module.scss";
const Header = () =>{
    return(
        <header className={classes.header}>
            <img
                src="https://lh3.googleusercontent.com/proxy/50nDNRqNneGRXK5kZ97GZoKzpOjxlYcj7wpEGMzmiQSKR8clY82ozLIeoE2toAjInoY5URsw_3oMxWkw31PDbPFSclSqO31SkF3JPxPnMicpKA_4pqyI3sga2jz6iaHpatuXFZCfUNpQAnqzbc1FuUTiFHI"
                alt=""
            />
            <span>Andriy Shulha -- social network</span>
        </header>
    );
};
export  default  Header;
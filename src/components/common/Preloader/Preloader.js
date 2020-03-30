import styles from "../../Users/Users.module.scss";
import preloader from "../../../assets/images/preloader.gif";
import React from "react";

let Preloader = () =>{
    return <img alt="preloader" className={styles.photoCenter} src={preloader} />
}
export default Preloader
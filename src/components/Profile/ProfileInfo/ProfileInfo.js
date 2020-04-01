import React from "react";
import classes from "./ProfileInfo.module.scss";
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  } else {
    return (
      <div>
        <div className={classes.userInfo}>
          <img src= {props.profile.photos.large} alt="" />
          <span>  <b>FullName</b> : {props.profile.fullName}</span>
          <span> <b>My Info</b> : {props.profile.aboutMe}</span>
            <span><b>Search work</b> : {props.profile.lookingForAJobDescription}</span>
        </div>
      </div>
    );
  }
};
export default ProfileInfo;
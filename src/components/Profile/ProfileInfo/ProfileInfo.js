import React from "react";
import classes from "./ProfileInfo.module.scss"
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          className={classes.photo}
          src="https://www.itl.cat/pngfile/big/172-1728377_images-400-pixels-wide-and-150-tall-sunset.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default ProfileInfo;
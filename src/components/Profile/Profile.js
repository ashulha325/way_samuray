import React from "react";
// import classes from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = (props) => {
  return (
    <div >
      <ProfileInfo />
      <MyPostsContainer
         />
    </div>
  );
};
export default Profile;
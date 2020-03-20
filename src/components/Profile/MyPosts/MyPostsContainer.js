import React from "react";
import {
  addPostActionCreator,
  updateNewPostActionCreator
} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import { connect } from "react-redux";



const mapStateToProps = state => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts

  };

};
const mapDispatchToProps = dispatch => {
  return {

    updateNewPostText: text => {
      dispatch(updateNewPostActionCreator(text));
    },
    addPost: () => {

      let action = addPostActionCreator();
      dispatch(action);
    }
  };
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
import {profileAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
    { id: 1, message: "Привіт", likeCount: 12 },
    { id: 2, message: "Я fwefewfew", likeCount: 15 },
    { id: 3, message: "and", likeCount: 17 },
    { id: 4, message: "Eat", likeCount: 127 }
  ],
  newPostText: "",
  profile : null
};
const profileReducer = (state = initialState, action) => {
  let stateCopy;
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7,
        message: state.newPostText,
        likeCount: 0
      };
      return { ...state, newPostText: "", posts: [...state.posts, newPost] };
      return stateCopy;

    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newPost };
    case SET_USER_PROFILE:
      return { ...state , profile: action.profile};
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
  return { type: ADD_POST };
};
export const updateNewPostActionCreator = text => {
  return { type: UPDATE_NEW_POST_TEXT, newPost: text };
};
export const setUserProfile = profile => {
  return { type: SET_USER_PROFILE, profile };
};
export const profileThunkCreator = (userId) =>{
  return dispatch =>{
    profileAPI.getProfile(userId)
        .then(data => {
         dispatch(setUserProfile(data))
        });
  }
}
export default  profileReducer;
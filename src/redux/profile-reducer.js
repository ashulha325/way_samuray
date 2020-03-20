const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Привіт", likeCount: 12 },
    { id: 2, message: "Я fwefewfew", likeCount: 15 },
    { id: 3, message: "and", likeCount: 17 },
    { id: 4, message: "Eat", likeCount: 127 }
  ],
  newPostText: ""
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
export default  profileReducer;
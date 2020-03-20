import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Привіт", likeCount: 12 },
        { id: 2, message: "Я fwefewfew", likeCount: 15 },
        { id: 3, message: "and", likeCount: 17 },
        { id: 4, message: "Eat", likeCount: 127 }
      ],
      newPostText: ""
    },
    messagePage: {
      messages: [
        { id: 1, message: "Привіт Анfddsдрій " },
        { id: 2, message: "helli" },
        { id: 3, message: "Varray happy" },
        { id: 4, message: "Deploy" },
        { id: 5, message: "ServerID" },
        { id: 6, message: "ServerName" }
      ],
      dialogs: [
        { id: 1, name: "Katya" },
        { id: 2, name: "Icemary" },
        { id: 3, name: "Vitalik" },
        { id: 4, name: "Sergiy" },
        { id: 5, name: "Tolik" },
        { id: 6, name: "Taras" }
      ],
      newMessageBody: ""
    }
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  _callSubscriber() {
    console.log("1");
  },
  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage , action);
    this._state.messagePage = messageReducer(this._state.messagePage , action);
    this._callSubscriber(this._state)
  }

};

export default store;
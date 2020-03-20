const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";
let initialState = {
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
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      const NewMessage = {
        id: 7,
        message: state.newMessageBody
      };
      return {
        ...state,
        newMessageBody: "",
        messages: [...state.messages, NewMessage]
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return { ...state, newMessageBody: action.updateMessage };
    default:
      return state;
  }
};
export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyCreator = text => {
  return { type: UPDATE_NEW_MESSAGE_BODY, updateMessage: text };
};
export default messageReducer;
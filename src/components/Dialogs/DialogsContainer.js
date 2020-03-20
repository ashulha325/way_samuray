import React from "react";
import {
  sendMessageCreator,
  updateNewMessageBodyCreator
} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

let mapStateToProps = state => {
  return {
    dialogs: state.messagePage.dialogs,
    messages: state.messagePage.messages,
    newMessageBody: state.messagePage.newMessageBody
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(sendMessageCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageBodyCreator(text));
    },
  };
};


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;
import React from "react";
import classes from "./Dialogs.module.scss";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = props => {
  let dialogsElements = props.dialogs.map(d => {
    return <DialogItem name={d.name} id={d.id} key={d.id} />;
  });
  let messagesElements = props.messages.map(m => {
    return <Message message={m.message} key={m.id} id={m.id} />;
  });

  const onAddMessage = () => {
    props.addMessage();
  };
  const onMessageChange = e => {
    let text = e.target.value;
    props.onMessageChange(text);
    console.log(text)
  };
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>{dialogsElements}</div>
      <div className={classes.messages}>
        {messagesElements}
        <textarea
          // placeholder="Enter Message"
          value={props.newMessageBody}
          onChange={onMessageChange}
        />
        <button onClick={onAddMessage}>Отправить Сообщение</button>
      </div>
    </div>
  );
};

export default Dialogs;
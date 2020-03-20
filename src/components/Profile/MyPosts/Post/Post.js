import React from "react";
import classes from "./Post.module.scss";
const Post = (props) => {
  return (
      <div className={classes.item}>
        <img
          src="https://www.meme-arsenal.com/memes/7bdea6754f999b50e9577596f09197fb.jpg"
          alt="alt"
        />
        <div className={classes.itemDetails}>
             {props.message}
            <span> Like {props.likeCount}</span>
        </div>
      </div>
  );
};
export default Post
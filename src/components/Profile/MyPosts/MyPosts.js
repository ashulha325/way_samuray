import React from "react";
import classes from "./MyPosts.module.scss";
import Post from "./Post/Post";
const MyPosts = props => {
  let posts = props.posts.map(p => {
    return <Post key={p.id} message={p.message} likeCount={p.likeCount} />;
  });

  const onAddPost = () => {
    props.addPost()
  };

  let onPostChange = (e) => {
    let text = e.target.value;
    props.updateNewPostText(text);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea
            value={props.newPostText}
            placeholder="Enter Text"
            onChange={onPostChange}
          />
        </div>
        <button onClick={onAddPost}>Add Post</button>
      </div>
      <div className={classes.posts}>{posts}</div>
    </div>
  );
};
export default MyPosts
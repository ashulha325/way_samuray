import React from "react";
import classes from "./Users.module.scss";
import userPhoto from "../../assets/images/user.jpg";

let Users = props => {
  let pageCount = Math.ceil(props.totalUsersCounter / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p, idx) => {
          return (
            <span
              key={idx}
              className={props.currentPage === p && classes.selectedPage}
              onClick={() => {
                props.onPageChanged(p);
              }}
            >
              {p}{" "}
            </span>
          );
        })}
      </div>
      {props.users.map(user => (
        <div key={user.id} className={classes.Users}>
          <div className={classes.UsersDetail}>
            <img
              className={classes.Photourl}
              src={user.photos.small != null ? user.photos.small : userPhoto}
              alt=""
            />
            <div className={classes.userDetailed}>
                <span>{user.name}</span>
                <span>{user.status}</span>
            </div>

            {user.followed ? (
              <button onClick={() => props.unfollow(user.id)}>Unfollow!</button>
            ) : (
              <button onClick={() => props.follow(user.id)}> Follow! </button>
            )}
          </div>
          <div className={classes.UsersDetailLocation}>
            <span>Country: {"user.location.country"}</span>
            <span>City: {"user.location.city"}</span>
          </div>
        </div>
      ))}
    </div>
  );
};


export default Users;
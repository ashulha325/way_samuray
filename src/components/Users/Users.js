import React from "react";
import classes from "./Users.module.scss";
import * as axios from "axios"
import userPhoto from "../../assets/images/user.jpg";
class UsersC extends React.Component {
    getUsers = () =>{

        if (this.props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response =>{
                debugger;
                this.props.setUsers(response.data.items)
            });
        }
    };
    render() {

        return (

            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {this.props.users.map(user => (
                    <div key={user.id} className={classes.Users}>
                        <div className={classes.UsersDetail}>
                            <img className={classes.Photourl} src={user.photos.small != null ? user.photos.small  : userPhoto} alt="" />
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                            {user.followed ? (
                                <button onClick={() => this.props.unfollow(user.id)}>
                                    {" "}
                                    Unfollow!{" "}
                                </button>
                            ) : (
                                <button onClick={() => this.props.follow(user.id)}> Follow! </button>
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
}
export default UsersC;
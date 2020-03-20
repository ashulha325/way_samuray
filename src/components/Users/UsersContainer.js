import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/users-reducer";
const mapStateToProps = (state) =>{
    return  {
        users: state.usersPage.users
    }
};
const mapDispatchToProps = (dispatch) =>{
    return {
        unfollow: (userId) =>{
            dispatch(unfollowAC(userId));
            console.log("unfollow")
        },
        follow: (userId) =>{
            dispatch(followAC(userId));
            console.log("follow")
        },

        setUsers: (users) =>{
            dispatch(setUsersAC(users));
        },


    }}

export default connect(mapStateToProps,mapDispatchToProps)(Users);

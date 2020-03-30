import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setUsers,
  SetUsersTotalCount,
  toggleIsFetching,
  unfollow
} from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.SetUsersTotalCount(response.data.totalCount);
      });
  }
  onPageChanged = pageNumber => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`
      )
      .then(response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
      <Preloader/>
        ) : (
          <Users
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            totalUsersCounter={this.props.totalUsersCounter}
            pageSize={this.props.pageSize}
          />
        )}
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCounter: state.usersPage.totalUsersCounter,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  };
};

export default connect(mapStateToProps,
    {
      follow,
      unfollow,
      setUsers,
      setCurrentPage,
      SetUsersTotalCount,
      toggleIsFetching,
})(UsersContainer);

// const mapDispatchToProps = dispatch => { // стрый вариант
  // return {
  //   unfollow: userId => {
  //     dispatch(unfollowAC(userId));
  //     console.log("unfollow");
  //   },
  //   follow: userId => {
  //     dispatch(followAC(userId));
  //     console.log("follow");
  //   },
  //
  //   setUsers: users => {
  //     dispatch(setUsersAC(users));
  //   },
  //   setCurrentPage: pageNumber => {
  //     dispatch(setCurrentPageAC(pageNumber));
  //   },
  //   setTotalUsersCount: totalCount => {
  //     dispatch(SetUsersTotalCountAC(totalCount));
  //   },
  //   toggleIsFetching: isFetching => {
  //     dispatch(toggleIsFetchingAC(isFetching));
  //   }
  // };
//}
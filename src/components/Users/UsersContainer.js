import React from "react";
import { connect } from "react-redux";
import {
    acceptFollow, acceptUnfollow, followThunkCreator,
    getUsersThunkCreator,
    setCurrentPage,
    SetUsersTotalCount,
    toggleIsProgress,
    unfollowThunkCreator
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
class UsersContainer extends React.Component {
  componentDidMount() {
      this.props.getUsersThunkCreator(this.props.currentPage , this.props.pageSize)

  }

  onPageChanged = pageNumber => {
      this.props.getUsersThunkCreator(pageNumber , this.props.pageSize)
  };
  render() {
    return (
      <>
        {this.props.isFetching ? (
      <Preloader/>
        ) : (
          <Users
            acceptFollow={this.props.acceptFollow}
            acceptUnfollow={this.props.acceptUnfollow}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            currentPage={this.props.currentPage}
            totalUsersCounter={this.props.totalUsersCounter}
            pageSize={this.props.pageSize}
            followingInProgress={this.props.followingInProgress}
            unfollowThunkCreator={this.props.unfollowThunkCreator}
            followThunkCreator={this.props.followThunkCreator}
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
    isFetching: state.usersPage.isFetching,
      followingInProgress: state.usersPage.followingInProgress
  };
};

export default connect(mapStateToProps,
    {
      acceptFollow,
      acceptUnfollow,
      setCurrentPage, SetUsersTotalCount,
      toggleIsProgress,getUsersThunkCreator,unfollowThunkCreator, followThunkCreator
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
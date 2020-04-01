import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_PROGRESS = "TOGGLE_IS_PROGRESS";
let initialState = {
  users: [],
  pageSize: 50,
  totalUsersCounter: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: false
};
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true }; // копия юзера
          }
          return user;
        })
      };
    //  делаем копию стейта , конкретного юзера na которого нужно подписаться
    // если  айди юзера совпадает с темм что пришел тогда подписаться
    // иначе ничего не делать
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false }; // копия юзера
          }
          return user;
        })
      };
    case SET_USERS: {
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCounter: action.count };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_PROGRESS: {
      return { ...state, followingInProgress: action.followingInProgress };
    }
    // получаем копию юзеров и дополняем теми ккоторые пришли вне
    ///  юзерс масив тоді робимо спред оператор акшинюзер  ( СКЛЕЙКА ДВУХ МАСИВОВ ТЕ КОТОРЫЕ БЫЛИ И ТЕ КОТОРЫЫЕ ПРИШЛИ ИЗ action
    default:
      return state;
  }
};
export const acceptFollow = userId => ({ type: FOLLOW, userId });
export const acceptUnfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({
  type: SET_CURRENT_PAGE,
  currentPage
});
export const SetUsersTotalCount = totalUsersCount => ({
  type: SET_TOTAL_USERS_COUNT,
  count: totalUsersCount
});
export const toggleIsFetching = isFetching => ({
  type: TOGGLE_IS_FETCHING,
  isFetching
});
export const toggleIsProgress = followingInProgress => ({
  type: TOGGLE_IS_PROGRESS,
  followingInProgress
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return dispatch => {
    dispatch(setCurrentPage(currentPage));
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(SetUsersTotalCount(data.totalCount));
    });
  };
};
export const unfollowThunkCreator = userId => {
  return dispatch => {
    dispatch(toggleIsProgress(true));
    usersAPI.unfollow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(acceptUnfollow(userId));
      }
      dispatch(toggleIsProgress(false));
    });
  };
};
export const followThunkCreator = userId => {
  return dispatch => {
    dispatch(toggleIsProgress(true));
    usersAPI.follow(userId).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(acceptFollow(userId));
      }
      dispatch(toggleIsProgress(false));
    });
  };
};
export default usersReducer;
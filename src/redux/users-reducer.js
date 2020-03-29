const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
let initialState = {
  users: [],
  pageSize:50,
  totalUsersCounter:0,
  currentPage:1
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
          return user
        })
      };
    case SET_USERS:{
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE:{
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT:{
      return { ...state, totalUsersCounter: action.count };
    }
      // получаем копию юзеров и дополняем теми ккоторые пришли вне
      ///  юзерс масив тоді робимо спред оператор акшинюзер  ( СКЛЕЙКА ДВУХ МАСИВОВ ТЕ КОТОРЫЕ БЫЛИ И ТЕ КОТОРЫЫЕ ПРИШЛИ ИЗ action
    default:
      return state;
  }
};
export const followAC = userId => ({ type: FOLLOW, userId });
export const unfollowAC = userId => ({ type: UNFOLLOW, userId });
export const setUsersAC = users => ({ type: SET_USERS, users });
export const setCurrentPageAC = currentPage => ({type: SET_CURRENT_PAGE , currentPage});
export const SetUsersTotalCountAC = totalUsersCount => ({type: SET_TOTAL_USERS_COUNT , count:totalUsersCount});
export default usersReducer;
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {profileThunkCreator, } from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
class ProfileContainer extends React.Component {
  componentDidMount() {
      let userId = this.props.match.params.userId;
      if (!userId) {
          userId = 2;
      }
        this.props.profileThunkCreator(userId)

  }

  render() {
    return <Profile {...this.props} profile={this.props.profile} />;
  }
}

let mapStateToProps = (state) => ({
// коли функцыя возвращает обьект ставим круглые скобки
    profile: state.profilePage.profile

})
let WithUrlDataContainerComponent = withRouter(ProfileContainer)
export default connect(mapStateToProps,
    {
        // eslint-disable-next-line no-undef
         profileThunkCreator
    })
(WithUrlDataContainerComponent);
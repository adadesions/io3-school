import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';


const styleDropdown = {
  top: '2em !important',
}
const styleAvatar = {
  backgroundColor: '#f44336',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
}
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $(".dropdown-button").dropdown();
  }

  onClickLogOut() {
    Meteor.logout();
  }

  render() {
    return(
      <ul id="nav-mobile" className="avatar-nav">
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">
          <div style={styleAvatar} className="large chip">
            <img src="images/navigator/avatar.png"/>
            { this.props.username }
          </div>
          <i className="material-icons right">arrow_drop_down</i>
        </a></li>
        <ul style={styleDropdown} id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li>
            <a
              href="#!"
              onClick={ this.onClickLogOut }
            >
              Logout
            </a>
          </li>
        </ul>
      </ul>
    )
  }
}

Avatar.props = {
  username: PropTypes.string.isRequired,
}

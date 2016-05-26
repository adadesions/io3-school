  import React, { PropTypes } from 'react';
import { Meteor } from 'meteor/meteor';

const styleAvatar = {
  backgroundColor: '#f44336',
  color: '#fff',
  fontSize: '16px',
  fontWeight: 'bold',
}
const styButton = {
  marginBottom: '0.5em',
  marginTop: '0.5em',
  width: '100%',
}
export default class Avatar extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    $(".dropdown-button").dropdown();

    $('#menuAvatar')
      .popup({
        popup : $('.menu-avatar.popup'),
        on    : 'click',
        position : 'bottom right'
    })
  }

  onClickAdminSite(){
    FlowRouter.go('upload')
  }

  onClickLogOut() {
    Meteor.logout();
  }

  render() {
    return(
        <ul id="nav-mobile" className="avatar-nav">
          <li><a id="menuAvatar" className="ui custom button">
            <div style={styleAvatar} className="large chip">
              <img src="/images/navigator/avatar.jpg"/>
              { this.props.username }
            </div>
            <i className="material-icons right">arrow_drop_down</i>
          </a></li>
        {/*<ul id="dropdown1" className="dropdown-content avatar">
            <li><a href="">Profile (Comming Soon)</a></li>
            <hr/>
            <li><a href="/admin/adminsite" onClick={this.onClickAdminSite}>Admin Site</a></li>
            <hr/>
            <li>
              <a
                href=""
                onClick={ this.onClickLogOut }
              >
                Logout
              </a>
            </li>
          </ul>*/}
          <div className="ui custom popup bottom left hidden menu-avatar">
            <div>
              <a style={styButton}>Profile (Comming Soon)</a>
              <hr/>
              <a onClick={this.onClickAdminSite} style={styButton}>Admin Site</a>
              <hr/>
              <a onClick={ this.onClickLogOut } style={styButton}>Logout</a>
              <hr/>
            </div>
          </div>
        </ul>
    )
  }
}

Avatar.props = {
  username: PropTypes.string.isRequired,
}

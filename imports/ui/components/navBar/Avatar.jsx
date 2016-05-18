import React from 'react';

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

  componentDidMount(){
    $(".dropdown-button").dropdown();
  }

  render() {
    return(
      <ul id="nav-mobile" className="avatar-nav">
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">
          <div style={styleAvatar} className="large chip">
            <img src="images/navigator/avatar.png"/>
            Ada Kaminkure
          </div>
          <i className="material-icons right">arrow_drop_down</i>
        </a></li>
        <ul style={styleDropdown} id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">Logout</a></li>
        </ul>
      </ul>
    )
  }
}

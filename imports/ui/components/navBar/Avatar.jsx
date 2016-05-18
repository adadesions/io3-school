import React, { PropTypes } from 'react';

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

  onClickAdminSite(){
    FlowRouter.go('adminSite')
  }

  render() {
    return(
      <ul id="nav-mobile" className="avatar-nav">
        <li><a className="dropdown-button" href="#!" data-activates="dropdown1">
          <div style={styleAvatar} className="large chip">
            <img src="/images/navigator/avatar.jpg"/>
            { this.props.username }
          </div>
          <i className="material-icons right">arrow_drop_down</i>
        </a></li>
      <ul id="dropdown1" className="dropdown-content avatar">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <hr/>
          <li><a href="" onClick={this.onClickAdminSite}>Admin Site</a></li>
          <hr/>
          <li><a href="#!">Logout</a></li>
        </ul>
      </ul>
    )
  }
}

Avatar.props = {
  username: PropTypes.string.isRequired,
}

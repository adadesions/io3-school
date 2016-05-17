import React from 'react';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

// Components
import Menu from './Menu.jsx';
import Avatar from './Avatar.jsx';

const colorNav = {
  backgroundColor: '#43609C',
  display: 'flex',
  justifyContent: 'space-between',
}
const sizeImg = {
  marginLeft: '0.2em',
  marginTop: '0.1em',
  width: '6em',
  height: 'auto',
}
const styleDropdown = {
  top: '30px',
  right: '0px',
}
const styleNav = {
  position: 'fixed',
  zIndex: '999',
}

class Navigator extends React.Component {
  render() {
    return (
      <nav style={styleNav} id="navigator">
        <div style={colorNav} className="nav-wrapper">
          <a href="#" className="brand-logo brand-ada"><img style={sizeImg} src="/images/navigator/logo2.png"/></a>
          <Menu />
          <Avatar username={this.props.username} />
        </div>
      </nav>
    )
  }
}



export default createContainer(() => {
  let username = "No name";
  if ( Meteor.user() ) {
    username = Meteor.user().username;
  }
  return {
    username,
  }
}, Navigator);

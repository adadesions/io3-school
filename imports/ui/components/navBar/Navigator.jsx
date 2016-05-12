import React from 'react';
import Menu from './Menu.jsx';
import Avatar from './Avatar.jsx';
const colorNav = {
  backgroundColor: '#43609C',
}
const sizeImg = {
  paddingLeft: '0.2em',
  paddingBottom: '0.15em',
  width: '2em',
  height: 'auto',
};
const styleDropdown = {
  top: '30px',
  right: '0px',
}
const styleNav = {
  position: 'fixed',
  zIndex: '999',
}
export default class Navigator extends React.Component {
  render() {
    return (
      <nav style={styleNav} id="navigator">
        <div style={colorNav} className="nav-wrapper">
          <a href="#" className="brand-logo"><img style={sizeImg} src="/images/login/logo.png"/></a>
          <Avatar/>
          <Menu />
        </div>
      </nav>
    )
  }
}

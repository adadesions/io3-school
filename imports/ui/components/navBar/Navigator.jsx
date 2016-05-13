import React from 'react';
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
export default class Navigator extends React.Component {
  render() {
    return (
      <nav style={styleNav} id="navigator">
        <div style={colorNav} className="nav-wrapper">
          <a href="#" className="brand-logo brand-ada"><img style={sizeImg} src="/images/login/logo2.png"/></a>
          <Menu />

          <Avatar/>
        </div>
      </nav>
    )
  }
}

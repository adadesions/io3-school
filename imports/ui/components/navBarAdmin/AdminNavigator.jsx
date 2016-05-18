import React from 'react';
import AdminAvatar from './AdminAvatar.jsx';
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
export default class AdminNavigator extends React.Component {
  render() {
    return (
      <nav style={styleNav} id="navigator">
        <div style={colorNav} className="nav-wrapper">
          <a href="/" className="brand-logo brand-admin"><img style={sizeImg} src="/images/navigator/logo2.png"/></a>
          <AdminAvatar/>
        </div>
      </nav>
    )
  }
}

import React from 'react';

const styleFont = {
  fontSize: '20px',
  fontWeight: 'bold',
}

export default class Menu extends React.Component {
  render() {
    return(
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a style={styleFont} href="sass.html">All Course</a></li>
        <li><a style={styleFont} href="badges.html">Support Us</a></li>
      </ul>
    )
  }
}

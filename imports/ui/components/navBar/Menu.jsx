import React from 'react';

export default class Menu extends React.Component {
  render() {
    return(
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
      </ul>
    )
  }
}

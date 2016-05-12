import React from 'react';

import Navigator from '../ui/components/navBar/Navigator.jsx';
import Items from '../ui/components/mainPage/Items.jsx';
const leftContent = {
  position: 'fixed',
  marginTop: '1em',
}
const rightContent = {
  marginLeft: '25%',
  marginTop: '1em',
}
export default class MainPage extends React.Component {

  render() {
    return (
      <div className="row">
        <div style={leftContent} className="col m3">
          test
        </div>
        <div style={rightContent} className="col m9">
          <div className="row">
            <h3>Free</h3>
            <hr/>
            <Items />
          </div>
          <div className="row">
            <h3>Advance</h3>
            <hr/>
            <Items />
          </div>
        </div>
      </div>
    )
  }
}

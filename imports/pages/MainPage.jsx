import React from 'react';

import Navigator from '../ui/components/navBar/Navigator.jsx';
import Items from '../ui/components/mainPage/Items.jsx';
import LeftContent from '../ui/components/mainPage/leftContent/LeftContent.jsx';
const leftContent = {
  position: 'fixed',
}
const rightContent = {
  marginLeft: '25%',
  marginTop: '1em',
}
const center = {
  textAlign: 'center',
  padding: '3em',
}

export default class MainPage extends React.Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }
  render() {
    return (
      <div className="row">
        <div style={leftContent} className="col m3 z-depth-1">
          <div style={center} className="row">
            <h3>News</h3>
            <h3>Adacode</h3>
          </div>
          <div className="row">
            <LeftContent />
          </div>
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

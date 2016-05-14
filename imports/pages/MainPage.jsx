import React from 'react';

import Navigator from '../ui/components/navBar/Navigator.jsx';
import Items from '../ui/components/mainPage/Items.jsx';
import LeftContent from '../ui/components/mainPage/leftContent/LeftContent.jsx';
const leftContent = {
  position: 'fixed',
  marginTop: '-0.2em',
  backgroundColor: '#fff',
}
const rightContent = {
  marginLeft: '25%',
  marginTop: '0.1em',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1em',
}
const center = {
  textAlign: 'center',
  padding: '3em',
}
const styleRow = {
  marginLeft: 'none',
  marginRight: 'none',
}
const container = {
  width:'80%',
  backgroundColor: '#fff',
  padding: '1em',
}
const styleHeader = {
  margin: '0px',
  marginBottom: '0.25em',
}
export default class MainPage extends React.Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });
  }
  render() {
    return (
      <div className="row main-page">
        <div style={leftContent} className="col m3 z-depth-1">
          <div className="row">
            <LeftContent />
          </div>
        </div>
        <div style={rightContent} className="col m9">
          <div style={container} className="z-depth-1">
            <div style={styleRow} className="row">
              <h4 style={styleHeader}>Free</h4>
              <div className="divider"></div>
              <Items />
            </div>
            <div style={styleRow} className="row">
              <h4 style={styleHeader}>Advance</h4>
              <div className="divider"></div>
              <Items />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

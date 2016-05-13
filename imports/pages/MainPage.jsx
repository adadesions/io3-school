import React from 'react';

import Navigator from '../ui/components/navBar/Navigator.jsx';
import Items from '../ui/components/mainPage/Items.jsx';
import LeftContent from '../ui/components/mainPage/leftContent/LeftContent.jsx';
const leftContent = {
  position: 'fixed',
  marginTop: '-0.2em',
}
const rightContent = {
  marginLeft: '25%',
  marginTop: '0.1em',
  backgroundColor: '#F1F1F1',
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
              <h3 style={styleHeader}>Free</h3>
              <hr/>
              <Items />
            </div>
            <div style={styleRow} className="row">
              <h3 style={styleHeader}>Advance</h3>
              <hr/>
              <Items />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

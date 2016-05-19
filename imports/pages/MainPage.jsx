import React from 'react';
import { isUserlogIn } from '../adaCodeModules/adacode.js';
import { createContainer } from 'meteor/react-meteor-data';

// Components
import Navigator from '../ui/components/navBar/Navigator.jsx';
import Items from '../ui/components/mainPage/Items.jsx';
import LeftContent from '../ui/components/mainPage/leftContent/LeftContent.jsx';

const leftContent = {
  position: 'fixed',
  marginTop: '-0.2em',
  backgroundColor: '#fff',
}
const rightContent = {
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
class MainPage extends React.Component {
  componentDidMount(){
    $(document).ready(function(){
      $('.slider').slider({
                            full_width: true,
                            Transition: 1,
                            Interval: 0.1
                          });
    });
  }
  render() {
    return (
      <div className="row main-page">
        <div className="col s12 l3 z-depth-1 column-news">
          <div className="row">
            <LeftContent />
          </div>
        </div>
        <div style={rightContent} className="col s12 l9 column-course">
          <div style={container} className="z-depth-1 course-container">
            <div style={styleRow} className="row">
              <h4 className="course-header" style={styleHeader}>Free</h4>
              <div className="divider"></div>
              <Items />
            </div>
            <div style={styleRow} className="row">
              <h4 className="course-header" style={styleHeader}>Advance</h4>
              <div className="divider"></div>
              <Items />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  isUserlogIn();
  return {};
}, MainPage);

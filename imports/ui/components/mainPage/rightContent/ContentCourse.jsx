import React from 'react';

import Items from '../Items.jsx';

const rightContent = {
  marginTop: '0.1em',
  display: 'flex',
  justifyContent: 'center',
  paddingTop: '1em',
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

export default class ContentCourse extends React.Component {
  render() {
    return (
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
    )
  }
}

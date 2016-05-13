import React from 'react';

const styleItem = {
  marginTop: '-0.5em',
  marginBottom: '-1em',
}
const styleCard = {
  backgroundColor: '#fff',
}
export default class VideoRelatesItem extends React.Component {
  render() {
    return (
        <a href="">
          <div style={styleCard} className="card-panel">
            <div style={styleItem} className="row valign-wrapper">
              <div className="col m3 tumbnail-relates">
                <img src="images/login/logo.png" className="responsive-img"/>
              </div>
              <div className="col m9">
                <span className="black-text">
                  This is a square image. Add the "circle" class to it to make it appear circular.
                </span>
              </div>
            </div>
          </div>
        </a>
    )
  }
}

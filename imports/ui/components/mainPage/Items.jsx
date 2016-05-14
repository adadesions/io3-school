import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const styleCard = {
  height: '210px',
}
const styleButton = {
  display: 'flex',
  justifyContent: 'center',
}
const styleTumbnail = {
  height: '7.6em',
}
export default class Items extends React.Component {

  onClickPlay(){
    FlowRouter.go('player');
  }

  render() {
    return (
          <div className="col m3 tumbnail-items">
            <div style={styleCard} className="card small">
              <div className="card-image waves-effect waves-block waves-light radius-img">
                <img style={styleTumbnail} className="activator" src="images/mainPage/tumbnail2.png"/>
              </div>
              <div className="card-content detail-tumbnail">
                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                <p style={styleButton}>
                  <a onClick={this.onClickPlay} className="btn-floating btn-small waves-effect waves-light red"><i className="material-icons">play_arrow</i></a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
                <p>Here is some more information about this product that is only revealed once clicked on.</p>
              </div>
            </div>
          </div>
    )
  }
}

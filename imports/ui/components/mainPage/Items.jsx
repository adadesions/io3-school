import React from 'react';

export default class Items extends React.Component {
  render() {
    return (
          <div className="col m3">
            <div className="card small">
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src="images/navigator/avatar.png"/>
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons right">more_vert</i></span>
                <p><a href="#">This is a link</a></p>
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

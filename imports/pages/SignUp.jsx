import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';

const center = {
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column',
  height: '80%',
  borderRadius: '2px',
  backgroundColor: 'rgba(250,250,250,0.8)',
};
const sizeBoxBotton = {
  width: '100%',
};
const sizeBotton = {
  width: '100%',
  backgroundColor: '#004064',
};
const sizeBottonCancel = {
  width: '100%',
  backgroundColor: '#b71c1c ',
  marginTop: '0.5em',
};
const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  background: 'url("/images/login/background.jpg")',
  backgroundSize: 'cover',
  marginBottom: 'none',
};
const justifyCenter = {
  display: 'flex',
  alignItems: 'center',
  justifyCenter: 'space-between',
  width: '100%',
  height: '100%',
};
const floatRight = {
  display: 'flex',
  justifyContent: 'flex-end',
};
const colorTextRegisterAndForget = {
  color: '#9E9E9E'
};
const sizeImg = {
  marginTop: '2em',
  width: '6em',
  height: 'auto',
};
const styleSignupButton = {
  marginRight: '-4.3em',
  marginBottom: '-4.5em',
  width: '6em',
  height: '6em',
};
const sizeIcon = {
  fontSize: '3em',
  lineHeight: '2em',
};
const styleBtnFacebook = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  marginTop: '0.5em',
  backgroundColor: '#43609C',
}
const styleBtnForget = {
  width: '100%',
}
const floatLeft = {
  display: 'flex',
  justifyContent: 'flex-start',
}

export default class SignUp extends React.Component {

  onClickBack() {
    FlowRouter.go('root');
  }

  render() {
    return (
      <div style={alignCenter} className="row">
        <div className="col l4">
          <br/>
        </div>
        <form style={center} className="col l4 z-depth-1">
          <div className="row">
            <div style={sizeImg}>
              <img src="/images/login/logo.png"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col l12">
              <input id="username" type="text" className="validate"/>
              <label htmlFor="username">Username</label>
            </div>
            <div className="input-field col l12">
              <input
                id="password"
                type="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
            <div className="input-field col l12">
              <input
                id="rePassword"
                type="password"
                className="validate"
              />
            <label htmlFor="rePassword">Re-Password</label>
            </div>
            <div className="input-field col l12">
              <p>
                <input type="checkbox" id="term-condition"/>
                <label htmlFor="term-condition">Accept Term And Condition</label>
              </p>
            </div>
          </div>
          <div style={sizeBoxBotton} className="row">
            <div className="input-field col l12">
              <button
                type="button"
                style={sizeBotton}
                className="waves-effect waves-light btn"
              >GO !!!
            </button>
            <button
              type="button"
              style={sizeBottonCancel}
              className="waves-effect waves-light btn"
              onClick={this.onClickBack}
            >Back
          </button>
            </div>
          </div>
          </form>
            <div className="col l4">
            <br/>
           </div>
        </div>
    )
  }
}

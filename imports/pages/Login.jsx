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
const sizeFormLogin = {
  width: '90%',
};
const sizeBoxBotton = {
  width: '90%',
};
const sizeBotton = {
  width: '100%',
  backgroundColor: '#004064',
};
const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  background: 'url("/images/login/background.jpg")',
  backgroundSize: 'cover',
  marginBottom: '0px',
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
  marginTop: '2.5em',
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

export default class Login extends React.Component {

  onClickSignup() {
    FlowRouter.go('signup');
  }

  render() {
    return (
      <div style={alignCenter} className="row">
        <div className="col l4">
          <br/>
        </div>
        <form style={center} className="col l4 z-depth-1">
          <div className="row">
            <div>
              <img style={sizeImg} src="/images/login/logo.png"/>
            </div>
          </div>
          <div style={sizeFormLogin} className="row">
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
          </div>
          <div style={sizeBoxBotton} className="row">
            <div className="input-field col l12">
              <button
                type="button"
                style={sizeBotton}
                className="waves-effect waves-light btn"
              >Login
            </button>
            <button
              type="button"
              style={styleBtnFacebook} className="waves-effect waves-light btn">
              <i className="uk-icon-facebook left"></i>Facebook
            </button>
            </div>
          </div>
          <div style={justifyCenter} className="row">
            <div style={floatLeft} className="input-field col l6">
              <a><h6>Forgot Password ?</h6></a>
            </div>
            <div style={floatRight} className="input-field col l6">
              <a
                 style={styleSignupButton}
                 className="btn-floating btn-large waves-effect waves-light blue"
                 onClick={this.onClickSignup}
              >
                <i style={sizeIcon} className="material-icons">add</i>
              </a>
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

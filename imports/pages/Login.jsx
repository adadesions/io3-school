import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { createContainer } from 'meteor/react-meteor-data';
import { isUserlogIn } from '../adaCodeModules/adacode.js';
import { Session } from 'meteor/session';

const sizeFormLogin = {
  width: '90%',
};
const sizeBoxBotton = {
  width: '90%',
};
const sizeBotton = {
  width: '100%',
  backgroundColor: '#004064',
  fontWeight: 'bold',
};
const alignCenter = {
  display: 'flex',
  alignItems: 'center',
  height: '100vh',
  background: 'url("/images/login/background.jpg")',
  backgroundSize: 'cover',
  marginBottom: '0px !important',
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
  fontWeight: 'bold',
}
const styleBtnForget = {
  width: '100%',
}
const floatLeft = {
  display: 'flex',
  justifyContent: 'flex-start',
}
const spaceIcon = {
  marginRight: '0.5em',
}
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      loginError: '',
    };
    this.onClickLogin = this.onClickLogin.bind(this);
  }

  componentDidMount(){
    $(document.body).on('keydown', this.onKeyDownLogin);
  }

  onKeyDownLogin(e) {
    var ENTER = 13;
    if( e.keyCode == ENTER ) {
        $('#btnLogin').trigger('click');
    }

  }

  onClickSignup() {
    FlowRouter.go('signup');
  }

  onClickLogin() {
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const isSuccessLogin = Meteor.userId();
    Session.setDefault('loginError', '');
    Meteor.loginWithPassword({
      email: username
    }, password, function (err) {
      if( err ) {
        Session.set('loginError', err.reason);
      }
    });

    this.setState({
      loginError: Session.get('loginError'),
    });
  }

  render() {
    return (
      <div style={alignCenter} className="row login-page">
        <div className="col s2 l4">
          <br/>
        </div>
        <form className="col s12 l4 style-form-login z-depth-1">
          <div className="row">
            <div>
              <img style={sizeImg} className="img-logo" src="/images/login/logo.png"/>
              <p> { this.state.loginError } </p>
            </div>
          </div>
          <div style={sizeFormLogin} className="row">
            <div className="input-field col s12 l12 input-login">
              <input
                id="username"
                ref="username"
                type="text"
                className="validate"
              />
            <label htmlFor="username">Email</label>
            </div>
            <div className="input-field col s12 l12 input-login">
              <input
                id="password"
                ref="password"
                type="password"
                className="validate"
              />
              <label htmlFor="password">Password</label>
            </div>
          </div>
          <div style={sizeBoxBotton} className="row">
            <div className="input-field col s12 l12">
              <button
                id="btnLogin"
                type="button"
                style={sizeBotton}
                className="waves-effect waves-light btn"
                onClick={ this.onClickLogin }
              >Login
            </button>
            <button
              id="btnLoginFacebook"
              type="button"
              style={styleBtnFacebook} className="waves-effect waves-light btn">
              <i style={spaceIcon} className="fa fa-facebook"></i>Facebook
            </button>
            </div>
          </div>
          <div style={justifyCenter} className="row">
            <div style={floatLeft} className="input-field col s6 l6 forget-password">
              <a><h6>Forgot Password ?</h6></a>
            </div>
            <div style={floatRight} className="input-field col s6 l6">
              <a
                 className="btn-floating btn-large waves-effect waves-light blue style-signup-button"
                 onClick={ this.onClickSignup }
              >
                <i style={sizeIcon} className="material-icons">add</i>
              </a>
            </div>
          </div>
          </form>
            <div className="col s2 l4">
            <br/>
           </div>
        </div>
    )
  }
}

export default createContainer(() => {
  isUserlogIn();
  return {};
}, Login);

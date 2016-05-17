import React from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';
import { createContainer } from 'meteor/react-meteor-data';

const center = {
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column',
  height: '95%',
  borderRadius: '2px',
  backgroundColor: 'rgba(250,250,250,0.8)',
};
const sizeBoxBotton = {
  width: '100%',
};
const sizeBotton = {
  width: '100%',
  backgroundColor: '#004064',
  fontWeight: 'bold',
};
const sizeBottonCancel = {
  width: '100%',
  backgroundColor: '#b71c1c ',
  marginTop: '0.5em',
  fontWeight: 'bold',
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
  marginTop: '1.5em',
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
class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      email: '',
      password: '',
      rePassword: '',
    };
    this.onClickLetsRock = this.onClickLetsRock.bind(this);
  }

  onClickBack() {
    FlowRouter.go('root');
  }

  onClickLetsRock() {
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    const rePassword = this.refs.rePassword.value;
    const email = this.refs.email.value;
    const acceptBox = this.refs.acceptBox.checked;
    const passwordMatch = ( password === rePassword );
    const isUsernameNull = !username;
    const isEmailNull = !email;
    const newUser = {
      username,
      password,
      email,
    }
    if( passwordMatch && acceptBox ) {
      Accounts.createUser(newUser, function () {
        FlowRouter.go('mainpage')
      })
    }
    else {
      if( !passwordMatch ) {
        this.setState({
          password: 'invalid',
          rePassword: 'invalid',
        });
      }

      if( isUsernameNull ) {
        this.setState({
          username: 'invalid',
        });
      }

      if( isEmailNull ) {
        this.setState({
          email: 'invalid',
        });
      }
    }
  }

  render() {
    return (
      <div style={alignCenter} className="row">
        <div className="col s2 l4">
          <br/>
        </div>
        <form style={center} className="col s8 l4 style-form-signup z-depth-1">
          <div className="row">
            <div>
              <img className="img-logo" style={sizeImg} src="/images/login/logo.png"/>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 l12">
              <input
                id="usernameSignup"
                ref="username"
                type="text"
                className={ `validate ${this.state.username}` }
              />
              <label htmlFor="usernameSignup">Username</label>
            </div>
            <div className="input-field col s12 l12">
              <input
                id="email"
                ref="email"
                type="email"
                className="validate"
                />
              <label htmlFor="email">Email</label>
            </div>
            <div className="input-field col s12 l12">
              <input
                id="passwordSignup"
                ref="password"
                type="password"
                className="validate"
              />
              <label htmlFor="passwordSignup">Password</label>
            </div>
            <div className="input-field col s12 l12">
              <input
                id="rePassword"
                ref="rePassword"
                type="password"
                className="validate"
              />
            <label htmlFor="rePassword">Re-Password</label>
            </div>
            <div className="input-field col s12 l12">
              <p>
                <input
                  type="checkbox"
                  id="term-condition"
                  ref="acceptBox"
                />
                <label className="term-condition" htmlFor="term-condition">Accept Term And Condition</label>
              </p>
            </div>
          </div>
          <div style={sizeBoxBotton} className="row">
            <div className="input-field col s12 l12">
              <button
                id="btnSignup"
                type="button"
                style={sizeBotton}
                className="waves-effect waves-light btn"
                onClick={ this.onClickLetsRock }
              >Let's Rock!
              </button>
            <button
              id="btnBack"
              type="button"
              style={sizeBottonCancel}
              className="waves-effect waves-light btn"
              onClick={this.onClickBack}
            >Back
          </button>
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
  const isLoggedIn = Meteor.userId();
  if( isLoggedIn ) {
    FlowRouter.go('mainpage');
  }
  return {};
}, SignUp);

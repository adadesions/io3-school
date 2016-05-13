import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Container from '../../imports/layouts/Container.jsx'
import LoginContainer from '../../imports/layouts/LoginContainer.jsx'
import Login from '../../imports/pages/Login.jsx';
import SignUp from '../../imports/pages/SignUp.jsx';
import MainPage from '../../imports/pages/MainPage.jsx';
import Player from '../../imports/pages/Player.jsx';

FlowRouter.route('/', {
  name: 'root',
  action() {
    mount(LoginContainer, {
      content: <Login />,
    });
  },
});

FlowRouter.route('/SignUp', {
  name: 'signup',
  action() {
    mount(LoginContainer, {
      content: <SignUp />,
    });
  },
});

FlowRouter.route('/AdacodeSchool', {
  name: 'mainpage',
  action() {
    mount(Container, {
      content: <MainPage />,
    });
  },
});

FlowRouter.route('/Player', {
  name: 'player',
  action() {
    mount(Container, {
      content: <Player />,
    });
  },
});

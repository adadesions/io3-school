import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Container from '../../imports/layouts/Container.jsx'
import Login from '../../imports/pages/Login.jsx';
import SignUp from '../../imports/pages/SignUp.jsx';

FlowRouter.route('/', {
  name: 'root',
  action() {
    mount(Container, {
      content: <Login />,
    });
  },
});

FlowRouter.route('/SignUp', {
  name: 'signup',
  action() {
    mount(Container, {
      content: <SignUp />,
    });
  },
});

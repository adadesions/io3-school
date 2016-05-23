import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/kadira:flow-router';

import Container from '../../imports/layouts/Container.jsx'
import LoginContainer from '../../imports/layouts/LoginContainer.jsx'
import VideoContainer from '../../imports/layouts/VideoContainer.jsx'
import Login from '../../imports/pages/Login.jsx';
import SignUp from '../../imports/pages/SignUp.jsx';
import MainPage from '../../imports/pages/MainPage.jsx';
import Player from '../../imports/pages/Player.jsx';
import ContentCourse from '../../imports/ui/components/mainPage/rightContent/ContentCourse.jsx';
import ContentBankAccount from '../../imports/ui/components/mainPage/rightContent/ContentBankAccount.jsx';

import AdminContainer from '../../imports/layouts/AdminContainer.jsx';
import AdminSite from '../../imports/pages/admin/AdminSite.jsx';

// School Router Section

const schoolRouter = FlowRouter.group({
  name: 'school',
});

const adminRouter = FlowRouter.group({
  prefix: '/admin',
  name: 'admin',
});

schoolRouter.route('/', {
  name: 'root',
  action() {
    mount(LoginContainer, {
      content: <Login />,
    });
  },
});

schoolRouter.route('/signup', {
  name: 'signup',
  action() {
    mount(LoginContainer, {
      content: <SignUp />,
    });
  },
});

schoolRouter.route('/school', {
  name: 'mainpage',
  action() {
    mount(Container, {
      content: <MainPage />,
    });
  },
});

schoolRouter.route('/course', {
  name: 'course',
  action() {
    mount(Container, {
      content: <ContentCourse />,
    });
  },
});

schoolRouter.route('/bankaccount', {
  name: 'bankaccount',
  action() {
    mount(Container, {
      content: <ContentBankAccount />,
    });
  },
})

schoolRouter.route('/player', {
  name: 'player',
  action() {
    mount(VideoContainer, {
      content: <Player />,
    });
  },
});

// Admin Router Section
adminRouter.route('/adminsite', {
  name: 'adminSite',
  action() {
    mount(AdminContainer, {
      content: <AdminSite />,
    });
  },
});

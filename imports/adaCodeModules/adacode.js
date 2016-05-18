import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

export const isUserlogIn = function () {
  const isLoggedIn = Meteor.userId();
  const path = FlowRouter.current().path;
  if( isLoggedIn ) {
    FlowRouter.go('mainpage');
  }
  else {
    const isSignUp = ( path === '/signup' );
    if ( isSignUp ) {
      FlowRouter.go('signup');
    }
    else {
      FlowRouter.go('root');  
    }
  }
}

import React from 'react';
import { isUserlogIn } from '../adaCodeModules/adacode.js';
import { createContainer } from 'meteor/react-meteor-data';

// Components
import Navigator from '../ui/components/navBar/Navigator.jsx';
import LeftContent from '../ui/components/mainPage/leftContent/LeftContent.jsx';
import ContentCourse from '../ui/components/mainPage/rightContent/ContentCourse.jsx';
import ContentBankAccount from '../ui/components/mainPage/rightContent/ContentBankAccount.jsx';

class MainPage extends React.Component {

  componentDidMount() {
    $(document).ready(function(){
      $('.slider').slider({
                            full_width: true,
                            Transition: 1,
                            Interval: 0.1
                          });
    });
  }

  render() {
    return (
      <div className="row main-page">
        <ContentCourse />
      </div>
    )
  }
}

export default createContainer(() => {
  isUserlogIn();
  return {};
}, MainPage);

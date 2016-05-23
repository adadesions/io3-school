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

  renderComponent() {
    if($('.go-all-course').click()){
      return <ContentCourse />;
    }
    else
      return <ContentBankAccount />;
  }

  render() {
    return (
      <div className="row main-page">
        <div className="col s12 l3 z-depth-1 column-news">
          <div className="row">
            <LeftContent />
          </div>
        </div>
        {this.renderComponent()}
      </div>
    )
  }
}

export default createContainer(() => {
  isUserlogIn();
  return {};
}, MainPage);

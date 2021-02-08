import React from 'react';
import RecentQuestionCell from 'src/component/Home/RecentQuestionCell';

// components
import Sidebar from '../../component/Sidebar';
// style
import './homeStyle.scss';

interface HomeProps {}

const HomeView: React.FC<HomeProps> = (props) => {
  return (
    <div className="home home__container">
      <Sidebar />
      <div className="home__mainContent">
        <h2>Recent Questions</h2>
        <div className="recentQuestionTable">
          <RecentQuestionCell />
          <RecentQuestionCell />
          <RecentQuestionCell />
        </div>
      </div>
    </div>
  );
};

export default HomeView;

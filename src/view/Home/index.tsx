import React from 'react';

// components
import Sidebar from '../../component/Sidebar';
// style
import './homeStyle.scss';

interface HomeProps {}

const HomeView: React.FC<HomeProps> = (props) => {
  return (
    <div className="home home__container">
      <Sidebar />
      <div className="home__mainContent"></div>
    </div>
  );
};

export default HomeView;

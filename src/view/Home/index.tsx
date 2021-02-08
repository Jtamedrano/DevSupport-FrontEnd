import React from 'react';

// style
import './homeStyle.scss';

interface HomeProps {}

const HomeView: React.FC<HomeProps> = (props) => {
  return (
    <div className="home home__container">
      <div className="home__sideBar"></div>
      <div className="home__mainContent"></div>
    </div>
  );
};

export default HomeView;

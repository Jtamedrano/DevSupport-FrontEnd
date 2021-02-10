import React from 'react';
import { Button } from 'src/component/styled-components';

import './landingHomeStyle.scss';

interface LandingPageHomeProps {}

const LandingPageHome: React.FC<LandingPageHomeProps> = (props) => {
  return (
    <div className="landingHome landingHome__container">
      <div className="landingHome_centerField">
        <h2>Ask Questions, Get Answers</h2>
        <p>Its not that hard</p>
      </div>
      <p className="landingHome__cta">Log in or Register now to get started</p>
      <div className="landingHome__buttonRack">
        <Button className="landingHome__btn">Login</Button>
        <Button className="landingHome__btn">Register</Button>
      </div>
    </div>
  );
};

export default LandingPageHome;

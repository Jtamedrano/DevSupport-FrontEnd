import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {}

const HeaderView: React.FC<Props> = (props) => {
  return (
    <header>
      <div>
        <NavLink to="/">Dev Support</NavLink>
      </div>
      <nav>
        <ul>
          <NavLink to="/login">
            <li>Login</li>
          </NavLink>
          <NavLink to="/join">
            <li>Signup</li>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderView;

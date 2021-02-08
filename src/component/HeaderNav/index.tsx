import { Link } from 'react-router-dom';

import './style.scss';

interface HeaderNavProps {}

const HeaderNav: React.FC<HeaderNavProps> = () => {
  return (
    <div className="headerNav headerNav__container">
      <div className="headerNav__navItem">
        <Link to="/">
          <h1 className="headerNav__navBrand">DevSupport</h1>
        </Link>
      </div>
    </div>
  );
};

export default HeaderNav;

import * as React from 'react';

import { BsSun, BsMoon } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';

import { HeaderStyle, Button, ButtonContent } from './styles';

interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = React.useContext(ThemeContext);

  return (
    <HeaderStyle>
      <Button onClick={toggleTheme} type="button">
        {title === 'light' ? <BsSun /> : <BsMoon />}
      </Button>
      <ButtonContent>
        <Link to="/" className="home">
          Home
        </Link>
        <Link to="/load" className="load">
          Load
        </Link>
      </ButtonContent>
    </HeaderStyle>
  );
};

export default Header;

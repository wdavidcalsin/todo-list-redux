import * as React from 'react';

import { BsSun, BsMoon } from 'react-icons/bs';
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
        <button type="button" className="home">
          Home
        </button>
        <button type="button" className="load">
          Load
        </button>
      </ButtonContent>
    </HeaderStyle>
  );
};

export default Header;

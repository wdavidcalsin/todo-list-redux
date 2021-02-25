import * as React from 'react';

import { BsSun, BsMoon } from 'react-icons/bs';
import { ThemeContext } from 'styled-components';

import { HeaderStyle, Button } from './styles';

interface Props {
  toggleTheme: () => void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = React.useContext(ThemeContext);

  return (
    <HeaderStyle>
      <Button onClick={toggleTheme} type="button">
        {title == 'light' ? <BsSun /> : <BsMoon />}
      </Button>
      <Button type="button" className="load">
        Load
      </Button>
    </HeaderStyle>
  );
};

export default Header;

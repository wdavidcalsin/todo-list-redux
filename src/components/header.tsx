import * as React from 'react';

import { BsSun, BsMoon } from 'react-icons/bs';

const Header = () => {
  return (
    <div>
      <button type="button">
        <BsSun />
      </button>
      <button type="button">Load</button>
    </div>
  );
};

export default Header;

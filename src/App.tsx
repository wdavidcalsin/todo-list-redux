import * as React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState';

import dark from './style/themes/dark';
import light from './style/themes/light';

import GlobalStyle from './style/global';

import IndexRouter from './router/router';

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <IndexRouter toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;

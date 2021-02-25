import * as React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePeristedState from './utils/usePersistedState';

import dark from './style/themes/dark';
import light from './style/themes/light';

import GlobalStyle from './style/global';

import Header from './components/header/header';
import Form from './components/form/form';

function App() {
  const [theme, setTheme] = usePeristedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title == 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="container-small">
        <Header toggleTheme={toggleTheme} />
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;

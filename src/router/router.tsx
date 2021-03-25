import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../page/home';
import Load from '../page/load';

const IndexRouter = ({ toggleTheme }: any) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home toggleTheme={toggleTheme} />
        </Route>
        <Route path="/load">
          <Load toggleTheme={toggleTheme} />
        </Route>
      </Switch>
    </Router>
  );
};

export default IndexRouter;

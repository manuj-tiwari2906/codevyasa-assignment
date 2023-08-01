import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { About, Contact, Home } from './components';
import NotFound from './common/not-found';

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

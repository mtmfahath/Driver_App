import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router';
import App from './containers/App';

import Admin from './layouts/Admin.layout';
import AboutPage from './containers/AboutPage.container';
import CounterPage from './containers/CounterPage';
import HomeLayout from './layouts/Home.layout';
import { ReactComponentLike } from 'prop-types';
import { RouteComponentProps } from 'react-router';

// Use this to pass down information to the child elems
interface MatchParam {
  name: string;
}
export interface MatchProps extends RouteComponentProps<MatchParam> {}

export interface LayoutRoutes {
  path: string;
  name: string;
  component: ReactComponentLike;
  layout: string;
  icon?: string;
}

// TODO: change this....some how
export default () => (
  <App>
    <Switch>
      <Route path="/about" component={AboutPage} />
      <Route path="/admin" component={Admin} />
      <Route path="/counter" component={CounterPage} />
      <Route path="/home" component={HomeLayout} />
      <Redirect from="/" to="/home/home" />
    </Switch>
  </App>
);

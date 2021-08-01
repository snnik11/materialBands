/**
 * Caution: Consider this file when using react-scripts
 *
 * You may delete this file and its occurrences from the project filesystem if you are using GatsbyJS or NextJS version
 */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WithLayout from 'WithLayout';
import {
  Main as MainLayout,
  Minimal as MinimalLayout,
  DocsLayout,
} from './layouts';

import {
  Home as HomeView,
  Coworking as CoworkingView,
  WebBasic as WebBasicView,
  Rental as RentalView,
  Pricing as PricingView,
  About as AboutView,
  AboutSideCover as AboutSideCoverView,
  BlogReachView as BlogReachViewView,
  Coworking,
} from './views';

const Routes = () => {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={WebBasicView}
            //{Coworking}
            // component={IndexView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/home"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={HomeView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/coworking"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={CoworkingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/blog-reach-view"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={BlogReachViewView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/web-basic"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={WebBasicView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/rental"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={RentalView}
            layout={MainLayout}
          />
        )}
      />{' '}
      <Route
        exact
        path="/pricing"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={PricingView}
            layout={MainLayout}
          />
        )}
      />
      <Route
        exact
        path="/about"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutView}
            layout={MainLayout}
          />
        )}
      />{' '}
      <Route
        exact
        path="/about-side-cover"
        render={matchProps => (
          <WithLayout
            {...matchProps}
            component={AboutSideCoverView}
            layout={MainLayout}
          />
        )}
      />
      <Redirect to="/not-found-cover" />
    </Switch>
  );
};

export default Routes;

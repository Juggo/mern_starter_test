/* eslint-disable global-require */
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './modules/App/App';

// require.ensure polyfill for node
if (typeof require.ensure !== 'function') {
  require.ensure = function requireModule(deps, callback) {
    callback(require);
  };
}

/* Workaround for async react routes to work with react-hot-reloader till
  https://github.com/reactjs/react-router/issues/2182 and
  https://github.com/gaearon/react-hot-loader/issues/288 is fixed.
 */
if (process.env.NODE_ENV !== 'production') {
  // Require async routes only in development for react-hot-reloader to work.
  require('./modules/ShopList/pages/ShopListPage/ShopListPage');
  require('./modules/ShopList/pages/ShopListDetailPage/ShopListDetailPage');
  require('./modules/ShopList/pages/ShopListNewPage/ShopListNewPage');
}

// react-router setup with code-splitting
// More info: http://blog.mxstbr.com/2016/01/react-apps-with-pages/
export default (
  <Route path="/" component={App}>
    <IndexRoute
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/ShopList/pages/ShopListPage/ShopListPage').default);
        });
      }}
    />
    <Route
      path="/shoplist/:slug-:cuid"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/ShopList/pages/ShopListDetailPage/ShopListDetailPage').default);
        });
      }}
    />
    <Route
      path="/newlist"
      getComponent={(nextState, cb) => {
        require.ensure([], require => {
          cb(null, require('./modules/ShopList/pages/ShopListNewPage/ShopListNewPage').default);
        });
      }}
    />
  </Route>
);

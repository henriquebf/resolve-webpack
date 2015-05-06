/**
 * routes
 * @component
 *
 * @description
 * - React Router/Application Routing
 */

import React from 'react';
//
import Router, {Route, NotFoundRoute, DefaultRouter, RouteHandler, Link} from 'react-router';
//
import App from '../screens/App/index.js';
import Admin from '../screens/App/screens/Admin/index.js';
//
import Reports from '../screens/App/screens/Admin/screens/Reports/index.js';

export default (

    <Route handler={App}>
        <Route handler={Admin}>
            <Route path="/" name="Reports" handler={Reports} addHandlerKey={true} />
        </Route>
    </Route>

);

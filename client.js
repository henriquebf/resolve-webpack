import React from 'react';
import Router, {Route, NotFoundRoute, DefaultRoute, Link, RouteHandler} from 'react-router';
import Routes from './app/config/routes.js';
//
import Promise from 'promise/lib/es6-extensions';

window.React = React; // To get React Chrome dev-tool tab working

var props = window.props;

Router.run(Routes, Router.HistoryLocation, function (Handler, state) {

	props.urlParams = state.params;
	props.urlQueries = state.query;

	React.render(
		<Handler {...props} />,
		document.getElementById('app')
	);

});

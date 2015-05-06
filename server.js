'use strict';

require('babel/register');

var React = require('react');
var Router = require('react-router');
var express = require('express');

var Routes = require('./app/config/routes.js');
var Layout = require('./templates/layout.js');

// Express Settings

var app = express();

// Bootstrap App

app.use(function (req, res, next) {

    var html;
    var props;

    res.locals.props = {
        hostname: req.hostname,
        path: req.path
    };

    Router.run(Routes, res.locals.props.path, function (Handler, state) {

        res.locals.props.urlParams = state.params;
        res.locals.props.urlQueries = req.query;

        html = React.renderToString(React.createElement(Handler, res.locals.props), null);
        props = res.locals.props;

    });

    res
        .status(res.statusCode)
        .send(new Layout(html, props).markup);

});

// Start App

var server = app.listen(process.env.PORT || 3000);




/**
 * @name App
 * @component
 *
 * @description
 * - React App Bootstrap
 */

import React from 'react';
import Router, {RouteHandler} from 'react-router';

export default React.createClass({

    /**
     * @name render
     * @description
     * - Render Child Route
     */

    render() {

        return (
            <RouteHandler {...this.props} />
        );

    }

});

/**
 * @name Admin
 * @component
 *
 * @description
 * - Admin Template
 */

import React from 'react';
import Router, {RouteHandler} from 'react-router';

export default React.createClass({

    render() {

        return (
            <div id="admin" className="template">
                <RouteHandler {...this.props} />
            </div>
        );

    }

});

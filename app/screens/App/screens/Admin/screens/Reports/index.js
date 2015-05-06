import React from 'react';

import SubmitButton from 'buttons/Submit.js';
//import SubmitButton from 'buttons/Submit';
//import SubmitButton from 'shared/buttons/Submit';

export default React.createClass({

    render() {
        return (
            <div className="container">
                <h1>Reports</h1>
                <SubmitButton />
            </div>
        )
    }

});

import React from 'react';
import {withRouter} from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <h3>Page Not Found!!</h3>
        </div>
    )
}

export default withRouter(NotFound);
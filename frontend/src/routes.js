import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/feed';
import New from './pages/new';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" exact component={New} />
        </Switch>
    );
}

export default Routes;
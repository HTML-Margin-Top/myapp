import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import ModalAnt from '../modal'
import RecordReport from '../recordList'
import Game from '../alert'

const AppRoute = () => (
    <Router>
        <div>
            <Route path="/modal" component={ModalAnt} exact={true}/>
            <Route path="/recordReport" component={RecordReport} exact={true}/>
            <Route path="/alert" component={Game} exact={true}/>
        </div>
    </Router>
);

export default AppRoute
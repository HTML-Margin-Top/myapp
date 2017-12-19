import React from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import ModalAnt from '../modal'
import RecordReport from '../recordList'
import Game from '../alert'
import CodePainterExample from '../erweima'

const AppRoute = () => (
    <Router>
        <div>
            <Route path="/modal" component={ModalAnt} exact={true}/>
            <Route path="/recordReport" component={RecordReport} exact={true}/>
            <Route path="/alert" component={Game} exact={true}/>
            <Route path="/erweima" component={CodePainterExample} exact={true}/>
        </div>
    </Router>
);

export default AppRoute
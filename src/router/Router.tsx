import React, { Component, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../redux/config/store';
import { Shared } from '../ui/shared/exports';

const HomePage = React.lazy(() => import('../ui/pages/Home/Home'));

export default class MainRouter extends Component {

    render() {
        return (
            <Router history={history}>
                <Suspense fallback={<Shared.Preloader />}>
                    <Switch>
                        <Route path="/" component={HomePage} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}
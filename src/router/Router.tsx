import React, { Component, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../redux/config/store';
import { Shared } from '../ui/shared/exports';

export default class MainRouter extends Component {
    
    render() {
        return (
            <Router history={history}>
                <Suspense fallback={<Shared.Preloader />}>
                    <Switch>
                        <Route path="/" component={_Home} />
                        <Route path="/users" component={_Users} />
                    </Switch>
                </Suspense>
            </Router>
        );
    }
}

const _Home = React.lazy(() => import('../ui/pages/Home/Home'));
const _Users = React.lazy(() => import('../ui/pages/Users/Users'));

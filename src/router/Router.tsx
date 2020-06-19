import React, { FC, Suspense } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { storeConfig } from '../redux/config/store';
import { Shared } from '../ui/shared/exports';
import { useSelector } from 'react-redux';
import { TState } from '../redux/config/root-types';

const MainRouter: FC = () => {
  const {currentError} = useSelector((state: TState) => state.errors);
  if (currentError) return <div>TODO: ERROR MESSAGE</div>
  console.log(currentError)
  
  return (
    <Router history={storeConfig.history}>
      <Suspense fallback={<Shared.Preloader />}>
        <Switch>
          <Route path="/" component={_Home} />
          <Route path="/users" component={_Users} />
        </Switch>
      </Suspense>
    </Router>
  )
}

export default MainRouter;

const _Home = React.lazy(() => import('../ui/pages/Home/Home'));
const _Users = React.lazy(() => import('../ui/pages/Users/Users'));

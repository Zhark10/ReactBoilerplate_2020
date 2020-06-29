import React, { FC, Suspense } from 'react';
import { Router, Switch } from 'react-router-dom';
import { StoreConfig } from '../redux/config/store';
import { Shared } from '../ui/shared/exports';
import { useSelector } from 'react-redux';
import { TState } from '../redux/config/root-types';
import { useRoutes } from './Routes';

const MainRouter: FC = () => {
  const {currentError} = useSelector((state: TState) => state.errors);

  const isAutheficated = false // custom auth logic
  const routes = useRoutes(isAutheficated)
  if (currentError) return <div>TODO: ERROR MESSAGE</div>
  
  return (
    <Router history={StoreConfig.history}>
      <Suspense fallback={<Shared.Preloader />}>
        {routes}
      </Suspense>
    </Router>
  )
}

export default MainRouter;

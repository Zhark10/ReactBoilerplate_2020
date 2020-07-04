import React, { FC, Suspense } from 'react'
import { Router } from 'react-router-dom'
import { StoreConfig } from '../redux/config/store'
import { Shared } from '../ui/shared/exports'
import { useSelector } from 'react-redux'
import { TState } from '../redux/config/root-types'
import { useRoutes } from './Routes'
import { RootComponent } from '../ui/root-components/exports'

const MainRouter: FC = () => {
  const { currentError } = useSelector((state: TState) => state.errors)

  const isAutheficated = false // custom auth logic
  const routes = useRoutes(isAutheficated)
  if (currentError) return <div>TODO: ERROR MESSAGE</div>

  return (
    <>
      <RootComponent.ModalPortal />
      <RootComponent.Notification />
      <Suspense fallback={<Shared.Preloader />}>
        <Router history={StoreConfig.history}>{routes}</Router>
      </Suspense>
    </>
  )
}

export default MainRouter

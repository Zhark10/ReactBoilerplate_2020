import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const useRoutes = (isAuthentificated: boolean) => {
  if (isAuthentificated) {
    return (
      <Switch>
        <Route path="/posts" exact component={_Posts} />
        <Redirect to="/posts" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/" exact component={_Auth} />
      <Redirect to="/" />
    </Switch>
  )
}

const _Posts = React.lazy(() => import('../ui/pages/Posts/Posts'))
const _Auth = React.lazy(() => import('../ui/pages/Auth/Auth'))

import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

export const useRoutes = (isAuthentificated: boolean) => {
  if (isAuthentificated) {
    return (
      <Switch>
        <Route path="/posts" component={_Posts} />
        <Redirect to="/posts" />
      </Switch>
    )
  }

  return (
    <Switch>
      <Route path="/signUp" exact component={_SignUp} />
      <Route path="/signIn" exact component={_SignIn} />
      <Redirect to="/signUp" />
    </Switch>
  )
}

const _Posts = React.lazy(() => import('../ui/pages/Posts/Posts'))
const _SignIn = React.lazy(() => import('../ui/pages/SignIn/SignIn'))
const _SignUp = React.lazy(() => import('../ui/pages/SignUp/SignUp'))

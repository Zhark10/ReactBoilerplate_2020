import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MainRouter from './router/Router'
import { StoreConfig } from './redux/config/store'
import CssBaseline from '@material-ui/core/CssBaseline'
import { AuthFirebase } from 'redux/config/firebase/firebase-provider'

import './index.scss'

const app = (
  <AuthFirebase.Provider>
    <Provider store={StoreConfig.store}>
      <CssBaseline />
      <MainRouter />
    </Provider>
  </AuthFirebase.Provider>
)

ReactDOM.render(app, document.getElementById('root'))

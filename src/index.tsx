import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import MainRouter from './router/Router'
import { StoreConfig } from './redux/config/store'
import CssBaseline from '@material-ui/core/CssBaseline'
import { FirebaseContext, Firebase } from 'redux/config/firebase-provider'

import './index.scss'

const app = (
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={StoreConfig.store}>
      <CssBaseline />
      <MainRouter />
    </Provider>
  </FirebaseContext.Provider>
)

ReactDOM.render(app, document.getElementById('root'))

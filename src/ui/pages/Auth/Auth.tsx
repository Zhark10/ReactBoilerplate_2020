import React, { FC } from 'react'
import './Auth.scss'
import { useAuth } from './Auth-ViewModel'

const Auth: FC = () => {
  const viewModel = useAuth()
  const { openExampleModal } = viewModel
  return (
    <div className="auth">
      is Auth page
      <button onClick={openExampleModal}>open modal</button>
    </div>
  )
}

export default Auth

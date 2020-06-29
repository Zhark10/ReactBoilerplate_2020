import React, { FC }  from 'react';
import './Auth.scss';
import { useAuth } from './Auth-ViewModel';

const Auth: FC  = () => {
  const viewModel = useAuth()
  return (
    <div className="auth">
      is Auth page
    </div>
  )
}

export default Auth;

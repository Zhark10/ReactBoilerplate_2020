import React, { FC } from 'react'
import { useSignIn } from './SignIn-ViewModel'

const SignIn: FC = () => {
  const viewModel = useSignIn()
  return <div className="signin">is SignIn page</div>
}

export default SignIn

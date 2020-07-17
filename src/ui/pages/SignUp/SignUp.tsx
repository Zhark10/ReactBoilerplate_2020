import React, { FC } from 'react'
import { useSignUp } from './SignUp-ViewModel'

const SignUp: FC = () => {
  const viewModel = useSignUp()
  return <div className="signup">is SignUp page</div>
}

export default SignUp

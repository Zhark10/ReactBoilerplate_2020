import React, { FC } from 'react'
import { useSignIn } from './SignIn-ViewModel'

const SignIn: FC = () => {
  const viewModel = useSignIn()
  const {
    form: { errors, handleSubmit, onSubmit, register },
  } = viewModel

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        ref={register({
          required: 'Required',
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'invalid email address',
          },
        })}
      />
      {errors.email && errors.email.message}

      <input
        name="username"
        ref={register({
          validate: (value) => value !== 'admin' || 'Nice try!',
        })}
      />
      {errors.username && errors.username.message}

      <button type="submit">Submit</button>
    </form>
  )
}

export default SignIn

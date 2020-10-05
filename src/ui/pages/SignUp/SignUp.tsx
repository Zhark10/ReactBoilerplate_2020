import React, { FC, useState } from 'react'
import { useSignUp } from './SignUp-ViewModel'
import { Link } from 'react-router-dom'
import { SignUpComps } from './SignUp-StyledComps'

const SignUp = () => {
  const vm = useSignUp()
  const {
    createUserWithEmailAndPasswordHandler,
    displayName,
    email,
    error,
    onChangeHandler,
    password,
    form: { errors, handleSubmit, onSubmit, register },
  } = vm
  return (
    <SignUpComps.MainContainer>
      <SignUpComps.LoginForm color="#008f68">
        <SignUpComps.H1>Sign Up</SignUpComps.H1>
        <div>
          {error !== null && <div>{error}</div>}
          <form>
            <label htmlFor="displayName">Display Name:</label>
            <input
              ref={register({
                validate: (value) => value !== 'admin' || 'Nice try!',
              })}
              type="text"
              name="displayName"
              value={displayName}
              placeholder="E.g: Faruq"
              id="displayName"
              onChange={onChangeHandler}
            />
            <label htmlFor="userEmail">Email:</label>
            <input
              ref={register({
                required: 'Required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'invalid email address',
                },
              })}
              type="email"
              name="userEmail"
              value={email}
              placeholder="E.g: faruq123@gmail.com"
              id="userEmail"
              onChange={onChangeHandler}
            />
            <label htmlFor="userPassword">Password:</label>
            <input
              type="password"
              name="userPassword"
              value={password}
              placeholder="Your Password"
              id="userPassword"
              onChange={onChangeHandler}
            />
            <button
              onClick={(event) => {
                createUserWithEmailAndPasswordHandler(event, email, password)
              }}
            >
              Sign up
            </button>
          </form>
          <p>or</p>
          <button>Sign In with Google</button>
          <p>
            Already have an account? <Link to="/signIn">Sign in here</Link>
          </p>
        </div>
      </SignUpComps.LoginForm>
    </SignUpComps.MainContainer>
  )
}
export default SignUp

import React, { FC, useState } from 'react'
import { useViewModel } from './SignUp-ViewModel'
import { Link } from 'react-router-dom'
import { SignUpComps } from './SignUp-StyledComps'

const { H1, LoginForm, MainContainer, Form, Input } = SignUpComps

const SignUp = () => {
  const {
    createUserWithEmailAndPasswordHandler,
    displayName,
    email,
    error,
    onChangeHandler,
    password,
    setError,
    form: { errors, handleSubmit, onSubmit, register },
  } = useViewModel()
  return (
    <MainContainer>
      <LoginForm color="#008f68">
        <H1>Sign Up</H1>
        <div>
          {error !== null && <div>{error}</div>}
          <Form>
            <label htmlFor="displayName">Display Name:</label>
            <Input
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
            <Input
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
            <Input
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
          </Form>
          <p>or</p>
          <button>Sign In with Google</button>
          <p>
            Already have an account? <Link to="/signIn">Sign in here</Link>
          </p>
        </div>
      </LoginForm>
    </MainContainer>
  )
}
export default SignUp

import React, { FC, useState } from 'react'
import { useSignUp } from './SignUp-ViewModel'
import { Link } from 'react-router-dom'
import styled, { css } from 'react-emotion'

const Heading = styled('h1')`
  background-color: ${(props: { bg: any }) => props.bg};
  color: ${(props: { fg: any }) => props.fg};
`

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
    <div className="mt-8">
      <Heading bg="#008f68" fg="#fae042">
        Sign Up
      </Heading>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form className="">
          <label htmlFor="displayName" className="block">
            Display Name:
          </label>
          <input
            ref={register({
              validate: (value) => value !== 'admin' || 'Nice try!',
            })}
            type="text"
            className="my-1 p-1 w-full "
            name="displayName"
            value={displayName}
            placeholder="E.g: Faruq"
            id="displayName"
            onChange={onChangeHandler}
          />
          <label htmlFor="userEmail" className="block">
            Email:
          </label>
          <input
            ref={register({
              required: 'Required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'invalid email address',
              },
            })}
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: faruq123@gmail.com"
            id="userEmail"
            onChange={onChangeHandler}
          />
          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            type="password"
            className="mt-1 mb-3 p-1 w-full"
            name="userPassword"
            value={password}
            placeholder="Your Password"
            id="userPassword"
            onChange={onChangeHandler}
          />
          <button
            className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
            onClick={(event) => {
              createUserWithEmailAndPasswordHandler(event, email, password)
            }}
          >
            Sign up
          </button>
        </form>
        <p className="text-center my-3">or</p>
        <button className="bg-red-500 hover:bg-red-600 w-full py-2 text-white">Sign In with Google</button>
        <p className="text-center my-3">
          Already have an account?{' '}
          <Link to="/signIn" className="text-blue-500 hover:text-blue-600">
            Sign in here
          </Link>
        </p>
      </div>
    </div>
  )
}
export default SignUp
